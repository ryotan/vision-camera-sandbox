import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {runOnJS} from 'react-native-reanimated';
import {
  Camera,
  FrameProcessorPerformanceSuggestion,
  useCameraDevices,
  useFrameProcessor,
} from 'react-native-vision-camera';
import {scanFaces, Face} from 'vision-camera-face-detector';

export const Home = () => {
  const devices = useCameraDevices();
  const device = devices.front;
  const camera = useRef<Camera>(null);

  const [isRecording, setIsRecording] = useState(false);
  const [isVideoCaptureEnabled, setIsVideoCaptureEnabled] = useState(!!device?.supportsParallelVideoProcessing);

  useEffect(() => {
    if (camera.current) {
      if (isRecording) {
        console.log('starting');
        camera.current.startRecording({
          flash: 'on',
          onRecordingFinished: video => {
            console.log(video);
            setIsRecording(false);
          },
          onRecordingError: error => console.error(error),
        });
      } else {
        camera.current.stopRecording().catch(() => {
          console.log('failed');
        });
      }
    }
  }, [isRecording]);

  const [faces, setFaces] = React.useState<Face[]>();

  const onFrameProcessorSuggestionAvailable = useCallback((suggestion: FrameProcessorPerformanceSuggestion) => {
    console.log(`Suggestion available! ${suggestion.type}: Can do ${suggestion.suggestedFrameProcessorFps} FPS`);
  }, []);

  const frameProcessor = useFrameProcessor(frame => {
    'worklet';
    const scannedFaces = scanFaces(frame);
    runOnJS(setFaces)(scannedFaces);
  }, []);

  if (device == null) return null;
  return (
    <View style={StyleSheet.absoluteFill}>
      <Camera
        ref={camera}
        style={StyleSheet.absoluteFill}
        device={device}
        isActive
        video={isVideoCaptureEnabled}
        audio={false}
        photo={false}
        torch="on"
        enableZoomGesture
        onError={error => {
          console.log(error);
          setIsVideoCaptureEnabled(false);
        }}
        frameProcessor={frameProcessor}
        frameProcessorFps={20}
        onFrameProcessorPerformanceSuggestionAvailable={onFrameProcessorSuggestionAvailable}
      />
      {faces?.map((face, index) => {
        return (
          <View
            key={index}
            style={{
              position: 'absolute',
              // @ts-expect-error -- どうも検知した領域の中心が合わないので、適当にそれっぽくなるように、公開されていないプロパティを利用
              top: (face.bounds.boundingCenterY - face.bounds.height) / 2,
              // @ts-expect-error -- どうも検知した領域の中心が合わないので、適当にそれっぽくなるように、公開されていないプロパティを利用
              right: (face.bounds.boundingCenterX - face.bounds.width) / 2,
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
            console.log('set isRecording');
            setIsRecording(prev => !prev);
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
    </View>
  );
};
