import {Button, CenteredView} from '@ryotan-vision-camera-sandbox/ui-components';
import {useCallback} from 'react';
import {Text} from 'react-native';

import type {HistoryScreenName} from '../../routes';
import {DetailScreenName} from '../../routes';
import type {HistoryStackScreenProps} from './HistoryStackScreenProps';

export const HistoryScreen = ({navigation}: HistoryStackScreenProps<typeof HistoryScreenName>) => {
  const navigateToDetail = useCallback(() => {
    navigation.navigate(DetailScreenName);
  }, [navigation]);
  return (
    <CenteredView>
      <Text>HistoryScreen</Text>
      <Button onPress={navigateToDetail}>
        <Text>Navigate to Detail</Text>
      </Button>
    </CenteredView>
  );
};
