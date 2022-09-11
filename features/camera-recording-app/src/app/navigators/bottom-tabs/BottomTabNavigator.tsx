import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import type {BottomTabScreenParams} from '../routes';
import {ConfigScreenName, HistoryStackNavigatorScreenName, HomeStackNavigatorScreenName} from '../routes';
import {bottomTabScreenWithoutStackNavigator, bottomTabScreenDefault} from '../screenOptions';
import {ConfigScreen} from './ConfigScreen';
import {HistoryStackNavigator} from './history-stack/HistoryStackNavigator';
import {HomeStackNavigator} from './home-stack/HomeStackNavigator';

const tab = createBottomTabNavigator<BottomTabScreenParams>();
export const BottomTabNavigator = () => {
  return (
    <tab.Navigator screenOptions={bottomTabScreenDefault}>
      <tab.Screen name={HomeStackNavigatorScreenName} component={HomeStackNavigator} />
      <tab.Screen name={HistoryStackNavigatorScreenName} component={HistoryStackNavigator} />
      <tab.Screen name={ConfigScreenName} component={ConfigScreen} options={bottomTabScreenWithoutStackNavigator} />
    </tab.Navigator>
  );
};
