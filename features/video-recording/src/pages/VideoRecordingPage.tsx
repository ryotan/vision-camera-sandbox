import {Button} from '@ryotan-vision-camera-sandbox/ui-components';
import type {FunctionComponent} from 'react';
import {memo} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {Camera} from 'react-native-vision-camera';

import {useCameraPermission} from '../use-cases/useCameraPermission';
import {useVideoRecorder} from '../use-cases/useVideoRecorder';

export interface Props {
  navigationOnRecordingFinished?: () => unknown;
  navigationOnRecordingError?: () => unknown;
}
export const VideoRecordingPage: FunctionComponent<Props> = memo(props => {
  useCameraPermission();

  const {device, camera, isActive, startRecording, stopRecording, isRecording} = useVideoRecorder(props);

  if (!device) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <>
      {/* FIXME: Camera zoom scale should follow pinch in/out gesture. */}
      <Camera style={styles.camera} ref={camera} device={device} isActive={isActive} video enableZoomGesture />
      <View style={styles.overlayContainer}>
        <View style={styles.recordingStatusBarContainer}>
          {/* FIXME: Extract button and bar components */}
          {isRecording ? (
            <View style={styles.recordingStatusBar}>
              <Button onPress={stopRecording}>
                <View style={{width: 50, height: 50, backgroundColor: 'red', borderRadius: 5}} />
              </Button>
            </View>
          ) : (
            <View style={styles.startRecordingBar}>
              <Button onPress={startRecording}>
                <View style={{width: 50, height: 50, backgroundColor: 'red', borderRadius: 9999}} />
              </Button>
            </View>
          )}
        </View>
      </View>
    </>
  );
});

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    flex: 1,
  },
  overlayContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  recordingStatusBarContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  startRecordingBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  recordingStatusBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
