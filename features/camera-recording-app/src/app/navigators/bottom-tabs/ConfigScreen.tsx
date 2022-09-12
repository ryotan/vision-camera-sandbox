import {CenteredView} from '@ryotan-vision-camera-sandbox/ui-components';
import type {FunctionComponent} from 'react';
import {Text} from 'react-native';

import type {ConfigScreenName} from '../routes';
import type {BottomTabScreenProps} from './BottomTabScreenProps';

export const ConfigScreen: FunctionComponent<BottomTabScreenProps<typeof ConfigScreenName>> = () => {
  return (
    <CenteredView>
      <Text>ConfigScreen</Text>
    </CenteredView>
  );
};
