import {useCallback} from 'react';
import type {VideoFile} from 'react-native-vision-camera';

import {useSaveMeasurementResult} from '../service/useSaveMeasurementResult';

interface Props {
  videoFile: VideoFile;
  navigateToPreviewScreen: (videoFile: VideoFile) => unknown;
  navigateAfterVideoFileSaved: (videoFile: VideoFile) => unknown;
  navigateWhenCanceled: (videoFile: VideoFile) => unknown;
}
export const useMeasurementResultOperation = ({
  videoFile,
  navigateAfterVideoFileSaved,
  navigateWhenCanceled,
}: Props) => {
  const {mutateAsync: saveMeasurementResult} = useSaveMeasurementResult();
  const save = useCallback(async () => {
    try {
      await saveMeasurementResult({videoFile});
      navigateAfterVideoFileSaved(videoFile);
    } catch (e) {
      console.error(e);
    }
  }, [navigateAfterVideoFileSaved, saveMeasurementResult, videoFile]);

  const cancel = useCallback(() => {
    navigateWhenCanceled(videoFile);
  }, [navigateWhenCanceled, videoFile]);

  return {save, cancel};
};
