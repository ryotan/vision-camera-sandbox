import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {BottomTabNavigator} from './bottom-tabs/BottomTabNavigator';
import type {RootStackScreenParams} from './routes';
import {BottomTabNavigatorScreenName} from './routes';
import {stackScreenFullWindow} from './screenOptions';

const root = createNativeStackNavigator<RootStackScreenParams>();
export const RootStackNavigator = () => {
  return (
    <root.Navigator screenOptions={stackScreenFullWindow}>
      <root.Screen name={BottomTabNavigatorScreenName} component={BottomTabNavigator} />
    </root.Navigator>
  );
};
