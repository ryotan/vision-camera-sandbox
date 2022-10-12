import {useFocusEffect} from '@react-navigation/native';
import {useIsMounted} from '@ryotan-vision-camera-sandbox/utilities';
import {useCallback, useRef, useState} from 'react';
import type {Camera, VideoFile, CameraCaptureError} from 'react-native-vision-camera';
import {useCameraDevices} from 'react-native-vision-camera';

import type {RecordedVideo} from '../types/RecordedVideo';

export interface Args {
  navigationOnRecordingFinished?: (recordedVideo: RecordedVideo) => unknown;
  navigationOnRecordingError?: () => unknown;
  showBottomTabBar?: () => unknown;
  hideBottomTabBar?: () => unknown;
}
export const useVideoRecorder = ({navigationOnRecordingFinished, showBottomTabBar, hideBottomTabBar}: Args) => {
  const devices = useCameraDevices();
  const device = devices.back;
  const camera = useRef<Camera>(null);

  // FIXME: 画面遷移時にカメラの録画を停止しないといけないけど、useFocusEffectはScreenから呼び出すようにするべき。
  const [isActive, setIsActive] = useState(true);
  useFocusEffect(
    useCallback(() => {
      // After navigated from this screen, video preview is not available.
      // To avoid this, activate the camera when the screen is focused and deactivate it when the screen is blurred.
      setIsActive(true);
      return () => setIsActive(false);
    }, []),
  );

  const isMounted = useIsMounted();
  const [isRecording, setIsRecording] = useState(false);

  const onRecordingFinished = useCallback(
    (video: VideoFile) => {
      console.log(`Record: ${video.path}`);
      if (isMounted()) {
        setIsRecording(false);
      }
      showBottomTabBar?.();
      navigationOnRecordingFinished?.({videoFile: video, startedAt: new Date(), finishedAt: new Date()});
    },
    [isMounted, navigationOnRecordingFinished, showBottomTabBar],
  );

  const onRecordingError = useCallback(
    (error: CameraCaptureError) => {
      // 'capture/no-valid-data' occurs when the user hits the button repeatedly.
      // 'capture/inactive-source' occurs when the user hits the button before the camera become active.
      if (['capture/no-valid-data', 'capture/inactive-source'].includes(error.code)) {
        // FIXME: If 'capture/nova-lid-data' occurs, the output file should be deleted.
        //        But the file path can not be obtained from the error.
        console.debug(error);
      } else {
        console.error(error);
      }
      if (isMounted()) {
        setIsRecording(false);
      }
      showBottomTabBar?.();
    },
    [isMounted, showBottomTabBar],
  );

  const startRecording = useCallback(() => {
    console.log('Start button pressed.', `isRecording: ${isRecording ? 'true' : 'false'}`);
    if (camera.current && !isRecording && isActive) {
      hideBottomTabBar?.();
      setIsRecording(true);
      camera.current.startRecording({onRecordingFinished, onRecordingError});
    }
  }, [hideBottomTabBar, isActive, isRecording, onRecordingError, onRecordingFinished]);

  const stopRecording = useCallback(() => {
    console.log('Stop button pressed.', `isRecording: ${isRecording ? 'true' : 'false'}`);
    if (camera.current && isRecording) {
      camera.current.stopRecording().catch(error => {
        console.log('Failed to stop recording.', error);
      });
    }
  }, [isRecording]);

  return {
    device,
    camera,
    isActive,
    isRecording,
    startRecording,
    stopRecording,
  };
};
