import {useEffect, useState} from 'react';
import type {CameraPermissionStatus} from 'react-native-vision-camera';
import {Camera} from 'react-native-vision-camera';

export const useCameraPermission = () => {
  const [cameraPermission, setCameraPermission] = useState<CameraPermissionStatus>();

  // FIXME: Get the authorization in the proper way.
  //   https://developer.android.com/training/permissions/requesting?hl=ja
  useEffect(() => {
    Camera.getCameraPermissionStatus()
      .then(status => {
        if (status !== 'authorized') {
          Camera.requestCameraPermission().catch(error => {
            console.error('Failed to request camera permission.', error);
          });
        }
        setCameraPermission(status);
      })
      .catch(error => {
        console.error('Failed to get camera permission status.', error);
      });
  }, []);

  return {cameraPermission};
};
