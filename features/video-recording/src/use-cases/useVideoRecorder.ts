import {useFocusEffect} from '@react-navigation/native';
import {useIsMounted} from '@ryotan-vision-camera-sandbox/utilities';
import {useCallback, useRef, useState} from 'react';
import type {Camera, VideoFile, CameraCaptureError} from 'react-native-vision-camera';
import {useCameraDevices} from 'react-native-vision-camera';

export interface Args {
  navigationOnRecordingFinished?: () => unknown;
  navigationOnRecordingError?: () => unknown;
}
export const useVideoRecorder = ({navigationOnRecordingFinished}: Args) => {
  const devices = useCameraDevices();
  const device = devices.front;
  const camera = useRef<Camera>(null);

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
      navigationOnRecordingFinished?.();
    },
    [isMounted, navigationOnRecordingFinished],
  );

  const onRecordingError = useCallback(
    (error: CameraCaptureError) => {
      // 'capture/no-valid-data' occurs when the user hits the button repeatedly.
      // 'capture/inactive-source' occurs when the user hits the button before the camera become active.
      if (['capture/no-valid-data', 'capture/inactive-source'].includes(error.code)) {
        console.debug(error);
      } else {
        console.error(error);
      }
      if (isMounted()) {
        setIsRecording(false);
      }
    },
    [isMounted],
  );

  const startRecording = useCallback(() => {
    console.log('Start button pressed.', `isRecording: ${isRecording ? 'true' : 'false'}`);
    if (camera.current && !isRecording && isActive) {
      setIsRecording(true);
      camera.current.startRecording({onRecordingFinished, onRecordingError});
    }
  }, [isActive, isRecording, onRecordingError, onRecordingFinished]);

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
