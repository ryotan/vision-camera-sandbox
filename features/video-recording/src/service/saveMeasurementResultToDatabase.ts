import type {VideoRecordingResult} from '../types/VideoRecordingResult';

export const saveMeasurementResultToDatabase = async (item: VideoRecordingResult) => {
  await new Promise(resolve => setTimeout(resolve, 20));
};
