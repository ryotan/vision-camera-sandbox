import type {VideoFile} from 'react-native-vision-camera';

export interface RecordedVideo {
  videoFile: VideoFile;
  startedAt: Date;
  finishedAt: Date;
}
