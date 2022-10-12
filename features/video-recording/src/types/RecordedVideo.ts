import type {VideoFile} from 'react-native-vision-camera';

export interface RecordedVideo {
  videoFile: VideoFile;
  startedAt: number;
  finishedAt: number;
}
