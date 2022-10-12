import {useMutation} from '@tanstack/react-query';

import type {VideoRecordingResult} from '../types/VideoRecordingResult';
import {saveMeasurementResultToDatabase} from './saveMeasurementResultToDatabase';
import {saveRecordedVideoFile} from './saveRecordedVideoFile';
import {saveRecordedVideoThumbnail} from './saveRecordedVideoThumbnail';

export const useSaveMeasurementResult = () => {
  return useMutation(
    ['measurement-result', 'save'],
    async (videoRecordingResult: VideoRecordingResult): Promise<VideoRecordingResult | undefined> => {
      await saveMeasurementResultToDatabase(videoRecordingResult);
      const videoFileUri = await saveRecordedVideoFile(videoRecordingResult.videoFile);
      if (!videoFileUri) {
        // FIXME: Use proper error
        throw new Error('Could not save video file');
      }
      // FIXME: Handle errors
      const thumbnailUri = await saveRecordedVideoThumbnail(videoFileUri);
      return {
        ...videoRecordingResult,
        videoFile: {...videoRecordingResult.videoFile, path: videoFileUri},
        thumbnailUri,
      };
    },
  );
};
