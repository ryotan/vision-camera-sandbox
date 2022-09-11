import {createNativeStackNavigator} from '@react-navigation/native-stack';

import type {HomeStackScreenParams} from '../../routes';
import {HomeScreenName, PreviewVideoScreenName, SaveVideoScreenName} from '../../routes';
import {stackScreenDefault, stackScreenFullWindow} from '../../screenOptions';
import {HomeScreen} from './HomeScreen';
import {PreviewVideoScreen} from './PreviewVideoScreen';
import {SaveVideoScreen} from './SaveVideoScreen';

const home = createNativeStackNavigator<HomeStackScreenParams>();
export const HomeStackNavigator = () => {
  return (
    <home.Navigator screenOptions={stackScreenDefault}>
      <home.Screen name={HomeScreenName} component={HomeScreen} options={stackScreenFullWindow} />
      <home.Screen name={SaveVideoScreenName} component={SaveVideoScreen} />
      <home.Screen name={PreviewVideoScreenName} component={PreviewVideoScreen} />
    </home.Navigator>
  );
};
