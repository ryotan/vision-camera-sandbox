import * as ExpoFileSystem from 'expo-file-system';
import type {VideoFile} from 'react-native-vision-camera';

import {generateRecordedVideoFileName} from '../util/generateRecordedVideoFileName';

export const saveRecordedVideoFile = async (videoFile: VideoFile) => {
  if (ExpoFileSystem.documentDirectory) {
    await ExpoFileSystem.moveAsync({
      from: videoFile.path,
      to: `${ExpoFileSystem.documentDirectory}${generateRecordedVideoFileName(new Date())}`,
    });
  }
};
