import {CenteredView, OutlinedButton} from '@ryotan-vision-camera-sandbox/ui-components';
import type {FunctionComponent} from 'react';
import {useCallback} from 'react';
import {Text, View} from 'react-native';

import type {ConfigScreenName} from '../../routes';
import type {ConfigStackScreenProps} from './ConfigStackScreenProps';

export const ConfigScreen: FunctionComponent<ConfigStackScreenProps<typeof ConfigScreenName>> = ({navigation}) => {
  const navigateToColorPalette = useCallback(() => {
    navigation.navigate('ColorPalette');
  }, [navigation]);

  return (
    <CenteredView>
      <Text>ConfigScreen</Text>
      {__DEV__ && (
        <View style={{flexDirection: 'row'}}>
          <OutlinedButton title="Color Palette" onPress={navigateToColorPalette} />
        </View>
      )}
    </CenteredView>
  );
};
