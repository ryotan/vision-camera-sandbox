import {useMutation} from '@tanstack/react-query';
import * as ExpoFileSystem from 'expo-file-system';
import type {VideoFile} from 'react-native-vision-camera';

export const useDeleteRecordedVideoFile = () => {
  return useMutation(['measurement-result', 'video', 'delete'], async (videoFile: VideoFile) => {
    if (await ExpoFileSystem.getInfoAsync(videoFile.path)) {
      await ExpoFileSystem.deleteAsync(videoFile.path);
    }
  });
};
