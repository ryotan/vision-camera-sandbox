import type {VideoFile} from 'react-native-vision-camera';

export interface VideoRecordingResult {
  videoFile: VideoFile;
  place?: string;
  startedAt: Date;
  finishedAt: Date;
  thumbnailUri?: string;
}
