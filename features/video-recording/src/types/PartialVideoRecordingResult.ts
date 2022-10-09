import type {RecordedVideo} from './RecordedVideo';
import type {VideoRecordingResult} from './VideoRecordingResult';

export type PartialVideoRecordingResult = Pick<VideoRecordingResult, keyof RecordedVideo> &
  Partial<VideoRecordingResult>;
