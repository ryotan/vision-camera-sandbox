import {StatusBar} from 'expo-status-bar';
import {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';

export default function App() {
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

  const devices = useCameraDevices();
  const device = devices.back;

  if (device == null) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Camera style={StyleSheet.absoluteFill} device={device} isActive />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
