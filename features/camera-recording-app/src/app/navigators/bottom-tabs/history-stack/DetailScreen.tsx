import {Button, CenteredView} from '@ryotan-vision-camera-sandbox/ui-components';
import {useCallback} from 'react';
import {Text} from 'react-native';

import type {DetailScreenName} from '../../routes';
import {HistoryScreenName} from '../../routes';
import type {HistoryStackScreenProps} from './HistoryStackScreenProps';

export const DetailScreen = ({navigation}: HistoryStackScreenProps<typeof DetailScreenName>) => {
  const navigateToHistory = useCallback(() => {
    navigation.navigate(HistoryScreenName);
  }, [navigation]);
  return (
    <CenteredView>
      <Text>DetailScreen</Text>
      <Button onPress={navigateToHistory}>
        <Text>Navigate to History</Text>
      </Button>
    </CenteredView>
  );
};
