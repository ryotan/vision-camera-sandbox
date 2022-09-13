import {VideoRecordingPage} from '@ryotan-vision-camera-sandbox/video-recording/src/pages/VideoRecordingPage';
import type {FunctionComponent} from 'react';
import {useCallback} from 'react';

import type {HomeScreenName} from '../../routes';
import {SaveVideoScreenName} from '../../routes';
import type {HomeStackScreenProps} from './HomeStackScreenProps';

export const HomeScreen: FunctionComponent<HomeStackScreenProps<typeof HomeScreenName>> = ({navigation}) => {
  const navigateToSaveVideo = useCallback(() => {
    navigation.navigate(SaveVideoScreenName);
  }, [navigation]);
  return <VideoRecordingPage navigationOnRecordingFinished={navigateToSaveVideo} />;
};
