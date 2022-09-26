import {useMutation} from '@tanstack/react-query';
import type {VideoFile} from 'react-native-vision-camera';

import {saveMeasurementResultToDatabase} from './saveMeasurementResultToDatabase';
import {saveRecordedVideoFile} from './saveRecordedVideoFile';

export interface MeasurementResult {
  videoFile: VideoFile;
  place?: string;
  date?: Date;
  thumbnailImage?: string;
}

export const useSaveMeasurementResult = () => {
  return useMutation(['measurement-result', 'save'], async (measurementResult: MeasurementResult) => {
    await saveMeasurementResultToDatabase(measurementResult);
    await saveRecordedVideoFile(measurementResult.videoFile);
  });
};
