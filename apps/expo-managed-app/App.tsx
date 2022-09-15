import {App as CameraRecordingApp} from '@ryotan-vision-camera-sandbox/camera-recording-app';
import {StatusBar} from 'expo-status-bar';
import React from 'react';

export const App = () => {
  return (
    <>
      <StatusBar style="dark" animated />
      <CameraRecordingApp />
    </>
  );
};
