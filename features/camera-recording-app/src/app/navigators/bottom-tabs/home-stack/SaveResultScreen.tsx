import type {PartialVideoRecordingResult} from '@ryotan-vision-camera-sandbox/video-recording';
import {SaveResultPage} from '@ryotan-vision-camera-sandbox/video-recording';
import type {FunctionComponent} from 'react';
import {useCallback} from 'react';

import type {SaveResultScreenName} from '../../routes';
import {HomeScreenName, HomeStackNavigatorScreenName, PreviewVideoScreenName} from '../../routes';
import type {HomeStackScreenProps} from './HomeStackScreenProps';

export const SaveResultScreen: FunctionComponent<HomeStackScreenProps<typeof SaveResultScreenName>> = ({
  navigation,
  route: {
    params: {recordedVideo},
  },
}) => {
  console.debug('SaveResultScreen is rendered');
  const navigateToHome = useCallback(() => {
    navigation.navigate(HomeStackNavigatorScreenName, {screen: HomeScreenName});
  }, [navigation]);
  const navigateToPreviewVideo = useCallback(
    (result: PartialVideoRecordingResult) => {
      navigation.navigate(HomeStackNavigatorScreenName, {
        screen: PreviewVideoScreenName,
        params: {result},
      });
    },
    [navigation],
  );

  return (
    <SaveResultPage
      recordedVideo={recordedVideo}
      navigateToPreviewScreen={navigateToPreviewVideo}
      navigateAfterVideoFileSaved={navigateToHome}
      navigateWhenCanceled={navigateToHome}
    />
  );
};
