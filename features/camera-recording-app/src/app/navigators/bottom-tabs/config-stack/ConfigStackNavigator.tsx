import {createNativeStackNavigator} from '@react-navigation/native-stack';

import type {ConfigStackScreenParams} from '../../routes';
import {ColorPaletteScreenName, ConfigScreenName} from '../../routes';
import {useStackScreenOptions} from '../../screenOptions';
import {ColorPaletteScreen} from './ColorPaletteScreen';
import {ConfigScreen} from './ConfigScreen';

const history = createNativeStackNavigator<ConfigStackScreenParams>();
export const ConfigStackNavigator = () => {
  const {defaultScreen} = useStackScreenOptions();
  return (
    <history.Navigator screenOptions={defaultScreen}>
      <history.Screen name={ConfigScreenName} component={ConfigScreen} />
      {__DEV__ && <history.Screen name={ColorPaletteScreenName} component={ColorPaletteScreen} />}
    </history.Navigator>
  );
};
