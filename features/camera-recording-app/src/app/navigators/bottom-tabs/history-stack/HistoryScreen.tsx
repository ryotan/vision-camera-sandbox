import {useCallback} from 'react';
import {Text} from 'react-native';

import {Button} from '../../../components/Button';
import {CenteredView} from '../../../components/CenteredView';
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
