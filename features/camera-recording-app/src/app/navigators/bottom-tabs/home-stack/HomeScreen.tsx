import {RecordVideoPage} from '@ryotan-vision-camera-sandbox/video-recording/src/pages/RecordVideoPage';
import type {RecordedVideo} from '@ryotan-vision-camera-sandbox/video-recording/src/types/RecordedVideo';
import type {FunctionComponent} from 'react';
import {useCallback} from 'react';

import type {HomeScreenName} from '../../routes';
import {SaveResultScreenName} from '../../routes';
import type {HomeStackScreenProps} from './HomeStackScreenProps';

export const HomeScreen: FunctionComponent<HomeStackScreenProps<typeof HomeScreenName>> = ({navigation}) => {
  const navigateToSaveVideo = useCallback(
    (recordedVideo: RecordedVideo) => {
      navigation.navigate(SaveResultScreenName, {recordedVideo});
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
    <RecordVideoPage
      navigationOnRecordingFinished={navigateToSaveVideo}
      hideBottomTabBar={hideBottomTabBar}
      showBottomTabBar={showBottomTabBar}
    />
  );
};
