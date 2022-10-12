import * as ExpoFileSystem from 'expo-file-system';
import {useCallback} from 'react';
import type {VideoFile} from 'react-native-vision-camera';

import {useSaveMeasurementResult} from '../service/useSaveMeasurementResult';
import type {PartialVideoRecordingResult} from '../types/PartialVideoRecordingResult';
import type {RecordedVideo} from '../types/RecordedVideo';
import type {VideoRecordingResult} from '../types/VideoRecordingResult';

interface Props {
  recordedVideo: RecordedVideo;
  navigateToPreviewScreen: (partialResult: PartialVideoRecordingResult) => unknown;
  navigateAfterVideoFileSaved: (result: VideoRecordingResult) => unknown;
  navigateWhenCanceled: (videoFile: VideoFile) => unknown;
}
export const useMeasurementResultOperation = ({
  recordedVideo,
  navigateAfterVideoFileSaved,
  navigateWhenCanceled,
}: Props) => {
  const {mutateAsync: saveMeasurementResult} = useSaveMeasurementResult();
  const save = useCallback(async () => {
    try {
      const result = await saveMeasurementResult({...recordedVideo});
      if (result) {
        navigateAfterVideoFileSaved(result);
      }
    } catch (e) {
      console.error(e);
    }
  }, [navigateAfterVideoFileSaved, saveMeasurementResult, recordedVideo]);

  const cancel = useCallback(() => {
    ExpoFileSystem.deleteAsync(recordedVideo.videoFile.path).catch(() => {
      // ignore
    });
    navigateWhenCanceled(recordedVideo.videoFile);
  }, [navigateWhenCanceled, recordedVideo.videoFile]);

  return {save, cancel};
};
