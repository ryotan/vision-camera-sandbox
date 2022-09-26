import {VideoRecordingPage} from '@ryotan-vision-camera-sandbox/video-recording/src/pages/VideoRecordingPage';
import type {FunctionComponent} from 'react';
import {useCallback} from 'react';
import type {VideoFile} from 'react-native-vision-camera';

import type {HomeScreenName} from '../../routes';
import {SaveResultScreenName} from '../../routes';
import type {HomeStackScreenProps} from './HomeStackScreenProps';

export const HomeScreen: FunctionComponent<HomeStackScreenProps<typeof HomeScreenName>> = ({navigation}) => {
  const navigateToSaveVideo = useCallback(
    (videoFile: VideoFile) => {
      navigation.navigate(SaveResultScreenName, {videoFile});
    },
    [navigation],
  );
  const hideBottomTabBar = useCallback(() => {
    navigation.getParent()?.setOptions({tabBarStyle: {display: 'none'}});
  }, [navigation]);
  const showBottomTabBar = useCallback(() => {
    navigation.getParent()?.setOptions({tabBarStyle: {display: 'flex'}});
  }, [navigation]);

  return (
    <VideoRecordingPage
      navigationOnRecordingFinished={navigateToSaveVideo}
      hideBottomTabBar={hideBottomTabBar}
      showBottomTabBar={showBottomTabBar}
    />
  );
};
