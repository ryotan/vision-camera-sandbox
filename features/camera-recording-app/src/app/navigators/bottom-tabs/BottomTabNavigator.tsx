import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import type {FunctionComponent} from 'react';

import {GearIcon} from '../../components/GearIcon';
import type {IconProps} from '../../components/IconProps';
import {ListIcon} from '../../components/ListIcon';
import {VideoCameraIcon} from '../../components/VideoCameraIcon';
import type {BottomTabScreenParams} from '../routes';
import {ConfigScreenName, HistoryStackNavigatorScreenName, HomeStackNavigatorScreenName} from '../routes';
import {bottomTabScreenWithoutStackNavigator, bottomTabScreenDefault} from '../screenOptions';
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
  return (
    <tab.Navigator screenOptions={bottomTabScreenDefault}>
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
        options={{...bottomTabScreenWithoutStackNavigator, title: 'Config', tabBarIcon: ConfigScreenBottomTabIcon}}
      />
    </tab.Navigator>
  );
};
