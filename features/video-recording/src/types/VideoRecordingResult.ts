import type {VideoFile} from 'react-native-vision-camera';

export interface VideoRecordingResult {
  videoFile: VideoFile;
  place?: string;
  startedAt: number;
  finishedAt: number;
  thumbnailUri?: string;
}
