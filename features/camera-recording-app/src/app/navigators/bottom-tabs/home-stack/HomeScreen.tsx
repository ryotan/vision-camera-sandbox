import {Button, CenteredView} from '@ryotan-vision-camera-sandbox/ui-components';
import type {FunctionComponent} from 'react';
import {useCallback} from 'react';
import {Text} from 'react-native';

import type {HomeScreenName} from '../../routes';
import {SaveVideoScreenName} from '../../routes';
import type {HomeStackScreenProps} from './HomeStackScreenProps';

export const HomeScreen: FunctionComponent<HomeStackScreenProps<typeof HomeScreenName>> = ({navigation}) => {
  const navigateToSaveVideo = useCallback(() => {
    navigation.navigate(SaveVideoScreenName);
  }, [navigation]);
  return (
    <CenteredView>
      <Text>HomeScreen</Text>
      <Button onPress={navigateToSaveVideo}>
        <Text>Navigate to SaveVideo</Text>
      </Button>
    </CenteredView>
  );
};
