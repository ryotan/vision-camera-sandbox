import {StatusBar} from 'expo-status-bar';
import type {FunctionComponent} from 'react';
import {useCallback} from 'react';
import {Platform, Text} from 'react-native';

import {Button} from '../../../components/Button';
import {CenteredView} from '../../../components/CenteredView';
import type {SaveVideoScreenName} from '../../routes';
import {
  DetailScreenName,
  HistoryStackNavigatorScreenName,
  HomeScreenName,
  HomeStackNavigatorScreenName,
  PreviewVideoScreenName,
} from '../../routes';
import type {HomeStackScreenProps} from './HomeStackScreenProps';

export const SaveVideoScreen: FunctionComponent<HomeStackScreenProps<typeof SaveVideoScreenName>> = ({navigation}) => {
  const navigateToHome = useCallback(() => {
    navigation.navigate(HomeStackNavigatorScreenName, {screen: HomeScreenName});
  }, [navigation]);
  const navigateToPreviewVideo = useCallback(() => {
    navigation.navigate(HomeStackNavigatorScreenName, {screen: PreviewVideoScreenName});
  }, [navigation]);
  const navigateToDetail = useCallback(() => {
    navigation.navigate(HistoryStackNavigatorScreenName, {screen: DetailScreenName});
  }, [navigation]);
  return (
    <CenteredView>
      {Platform.OS === 'ios' && <StatusBar style="light" animated />}
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
