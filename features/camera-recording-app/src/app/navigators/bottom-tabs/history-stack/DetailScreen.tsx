import {Button, CenteredView} from '@ryotan-vision-camera-sandbox/ui-components';
import {ResizeMode, Video} from 'expo-av';
import {useCallback, useRef} from 'react';
import {Text} from 'react-native';

import type {DetailScreenName} from '../../routes';
import {HistoryScreenName} from '../../routes';
import type {HistoryStackScreenProps} from './HistoryStackScreenProps';

export const DetailScreen = ({
  navigation,
  route: {
    params: {file},
  },
}: HistoryStackScreenProps<typeof DetailScreenName>) => {
  const navigateToHistory = useCallback(() => {
    navigation.navigate(HistoryScreenName);
  }, [navigation]);

  const video = useRef<Video>(null);

  return (
    <CenteredView>
      <Text>DetailScreen</Text>
      <Video ref={video} style={{flex: 1}} source={{uri: file}} useNativeControls resizeMode={ResizeMode.CONTAIN} />
      <Button onPress={navigateToHistory}>
        <Text>Navigate to History</Text>
      </Button>
    </CenteredView>
  );
};
