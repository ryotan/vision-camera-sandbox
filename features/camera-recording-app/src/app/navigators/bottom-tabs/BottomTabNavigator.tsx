import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {GearIcon, ListIcon, VideoCameraIcon} from '@ryotan-vision-camera-sandbox/ui-components';
import type {IconProps} from '@ryotan-vision-camera-sandbox/ui-components';
import type {FunctionComponent} from 'react';

import type {BottomTabScreenParams} from '../routes';
import {ConfigScreenName, HistoryStackNavigatorScreenName, HomeStackNavigatorScreenName} from '../routes';
import {useBottomTabScreenOptions} from '../screenOptions';
import {ConfigScreen} from './ConfigScreen';
import {HistoryStackNavigator} from './history-stack/HistoryStackNavigator';
import {HomeStackNavigator} from './home-stack/HomeStackNavigator';

const VideoRecordBottomTabIcon: FunctionComponent<IconProps> = ({color, size}) => {
  return <VideoCameraIcon color={color} size={size} />;
};
const VideoHistoryBottomTabIcon: FunctionComponent<IconProps> = ({color, size}) => {
  return <ListIcon color={color} size={size} />;
};
const ConfigScreenBottomTabIcon: FunctionComponent<IconProps> = ({color, size}) => {
  return <GearIcon color={color} size={size} />;
};

const tab = createBottomTabNavigator<BottomTabScreenParams>();
export const BottomTabNavigator = () => {
  console.debug('BottomTabNavigator is rendered');

  const {defaultScreen, screenWithoutStackNavigator} = useBottomTabScreenOptions();
  return (
    <tab.Navigator screenOptions={defaultScreen}>
      <tab.Screen
        name={HomeStackNavigatorScreenName}
        component={HomeStackNavigator}
        options={{title: 'Record', tabBarIcon: VideoRecordBottomTabIcon}}
      />
      <tab.Screen
        name={HistoryStackNavigatorScreenName}
        component={HistoryStackNavigator}
        options={{title: 'History', tabBarIcon: VideoHistoryBottomTabIcon}}
      />
      <tab.Screen
        name={ConfigScreenName}
        component={ConfigScreen}
        options={{...screenWithoutStackNavigator, title: 'Config', tabBarIcon: ConfigScreenBottomTabIcon}}
      />
    </tab.Navigator>
  );
};
