import {Button, CenteredView} from '@ryotan-vision-camera-sandbox/ui-components';
import type {FunctionComponent} from 'react';
import {useCallback} from 'react';
import {Text} from 'react-native';

import type {SaveVideoScreenName} from '../../routes';
import {
  DetailScreenName,
  HistoryStackNavigatorScreenName,
  HomeScreenName,
  HomeStackNavigatorScreenName,
  PreviewVideoScreenName,
} from '../../routes';
import type {HomeStackScreenProps} from './HomeStackScreenProps';

export const SaveVideoScreen: FunctionComponent<HomeStackScreenProps<typeof SaveVideoScreenName>> = ({
  navigation,
  route: {
    params: {videoFile},
  },
}) => {
  const navigateToHome = useCallback(() => {
    navigation.navigate(HomeStackNavigatorScreenName, {screen: HomeScreenName});
  }, [navigation]);
  const navigateToPreviewVideo = useCallback(() => {
    navigation.navigate(HomeStackNavigatorScreenName, {screen: PreviewVideoScreenName, params: {videoFile}});
  }, [navigation, videoFile]);
  const navigateToDetail = useCallback(() => {
    navigation.navigate(HistoryStackNavigatorScreenName, {screen: DetailScreenName});
  }, [navigation]);
  return (
    <CenteredView>
      <Text>RecordScreen</Text>
      <Button onPress={navigateToHome}>
        <Text>Navigate to Home</Text>
      </Button>
      <Button onPress={navigateToPreviewVideo}>
        <Text>Navigate to PreviewVideo</Text>
      </Button>
      <Button onPress={navigateToDetail}>
        <Text>Navigate to History &gt; Detail</Text>
      </Button>
    </CenteredView>
  );
};
