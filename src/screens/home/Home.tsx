import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Platform, Pressable, SafeAreaView, StyleSheet, View} from 'react-native';
import {runOnJS} from 'react-native-reanimated';
import {Camera, useCameraDevices, useFrameProcessor} from 'react-native-vision-camera';
import {scanFaces, Face} from 'vision-camera-face-detector';

const usePrevious = <T,>(current: T) => {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = current;
  });

  return ref.current;
};
const useIsMounted = () => {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  return useCallback(() => isMounted.current, []);
};

export const Home = () => {
  const devices = useCameraDevices();
  const device = devices.front;
  const camera = useRef<Camera>(null);

  const [isRecording, setIsRecording] = useState(false);
  const [isVideoCaptureEnabled, setIsVideoCaptureEnabled] = useState(true);

  const prevIsRecording = usePrevious(isRecording);
  const isMounted = useIsMounted();

  // FIXME: ちゃんとした方法で権限を取得するように修正すること
  useEffect(() => {
    Camera.getCameraPermissionStatus()
      .then(status => {
        if (status !== 'authorized') {
          Camera.requestCameraPermission().catch(() => {
            console.log('Camera permission is required.');
          });
        }
      })
      .catch(() => {
        console.log('Failed to get camera permission status.');
      });
  });

  useEffect(() => {
    if (camera.current) {
      if (!prevIsRecording && isRecording) {
        console.log('start recording');
        camera.current.startRecording({
          onRecordingFinished: video => {
            console.log(`Record: ${video.path}`);
            if (isMounted()) {
              setIsRecording(false);
            }
          },
          onRecordingError: error => console.error(error),
        });
      }
      if (prevIsRecording && !isRecording) {
        camera.current.stopRecording().catch(() => {
          console.log('Failed to stop recording.');
        });
      }
    }
  }, [isMounted, isRecording, prevIsRecording]);

  const [faces, setFaces] = React.useState<Face[]>();

  const frameProcessor = useFrameProcessor(
    frame => {
      'worklet';
      if (!isVideoCaptureEnabled || isRecording) {
        const scannedFaces = scanFaces(frame);
        runOnJS(setFaces)(scannedFaces);
      }
    },
    [isVideoCaptureEnabled, isRecording],
  );

  if (device == null) return null;
  return (
    <SafeAreaView style={StyleSheet.absoluteFill}>
      <Camera
        ref={camera}
        style={StyleSheet.absoluteFill}
        device={device}
        isActive
        video={isVideoCaptureEnabled}
        audio={false}
        photo={false}
        enableZoomGesture
        onError={error => {
          console.log(error);
          if (isMounted()) {
            setIsVideoCaptureEnabled(false);
          }
        }}
        frameProcessor={frameProcessor}
        frameProcessorFps={20}
      />
      {faces?.map((face, index) => {
        return (
          <View
            key={index}
            style={{
              position: 'absolute',
              top: Platform.select({
                // @ts-expect-error -- どうも検知した領域の中心が合わないので、適当にそれっぽくなるように、公開されていないプロパティを利用
                android: (face.bounds.boundingCenterY - face.bounds.height) / 2,
                ios: 30,
              }),
              right: Platform.select({
                // @ts-expect-error -- どうも検知した領域の中心が合わないので、適当にそれっぽくなるように、公開されていないプロパティを利用
                android: (face.bounds.boundingCenterX - face.bounds.width) / 2,
                ios: 30,
              }),
              width: face.bounds.width,
              height: face.bounds.height,
              backgroundColor: 'transparent',
              borderWidth: 3,
              borderColor: 'red',
              zIndex: 0,
            }}
          />
        );
      })}
      {isVideoCaptureEnabled && (
        <Pressable
          onPress={() => {
            console.log('pressed');
            if (isMounted()) {
              setIsRecording(prev => !prev);
            }
          }}>
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: isRecording ? 9999 : 0,
              backgroundColor: 'red',
            }}
          />
        </Pressable>
      )}
    </SafeAreaView>
  );
};
