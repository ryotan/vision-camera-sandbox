import * as ExpoFileSystem from 'expo-file-system';
import type {VideoFile} from 'react-native-vision-camera';

import {generateRecordedVideoFileName} from '../utils';

export const saveRecordedVideoFile = async (videoFile: VideoFile) => {
  if (!ExpoFileSystem.documentDirectory) {
    return;
  }

  const path = `${ExpoFileSystem.documentDirectory}${generateRecordedVideoFileName(new Date())}`;
  await ExpoFileSystem.moveAsync({
    from: videoFile.path,
    to: path,
  });
  return path;
};
