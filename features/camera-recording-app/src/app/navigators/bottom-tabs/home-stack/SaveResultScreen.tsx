import {SaveResultPage} from '@ryotan-vision-camera-sandbox/video-recording/src/pages/SaveResultPage';
import {useDeleteRecordedVideoFile} from '@ryotan-vision-camera-sandbox/video-recording/src/service/useDeleteRecordedVideoFile';
import type {FunctionComponent} from 'react';
import {useCallback, useEffect} from 'react';

import type {SaveResultScreenName} from '../../routes';
import {HomeScreenName, HomeStackNavigatorScreenName, PreviewVideoScreenName} from '../../routes';
import type {HomeStackScreenProps} from './HomeStackScreenProps';

export const SaveResultScreen: FunctionComponent<HomeStackScreenProps<typeof SaveResultScreenName>> = ({
  navigation,
  route: {
    params: {videoFile},
  },
}) => {
  console.debug('SaveResultScreen is rendered');
  const navigateToHome = useCallback(() => {
    navigation.navigate(HomeStackNavigatorScreenName, {screen: HomeScreenName});
  }, [navigation]);
  const navigateToPreviewVideo = useCallback(() => {
    navigation.navigate(HomeStackNavigatorScreenName, {screen: PreviewVideoScreenName, params: {videoFile}});
  }, [navigation, videoFile]);

  const {mutateAsync: removeRecordedFile} = useDeleteRecordedVideoFile();
  useEffect(() => {
    return navigation.addListener('beforeRemove', async () => {
      await removeRecordedFile(videoFile);
    });
  }, [navigation, removeRecordedFile, videoFile]);

  return (
    <SaveResultPage
      videoFile={videoFile}
      navigateToPreviewScreen={navigateToPreviewVideo}
      navigateAfterVideoFileSaved={navigateToHome}
      navigateWhenCanceled={navigateToHome}
    />
  );
};
