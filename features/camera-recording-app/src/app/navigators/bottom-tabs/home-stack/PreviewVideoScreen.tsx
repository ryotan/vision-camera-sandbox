import {CenteredView} from '@ryotan-vision-camera-sandbox/ui-components';
import type {FunctionComponent} from 'react';
import {Text} from 'react-native';

import type {PreviewVideoScreenName} from '../../routes';
import type {HomeStackScreenProps} from './HomeStackScreenProps';

export const PreviewVideoScreen: FunctionComponent<HomeStackScreenProps<typeof PreviewVideoScreenName>> = () => {
  return (
    <CenteredView>
      <Text>PreviewScreen</Text>
    </CenteredView>
  );
};
