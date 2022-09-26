import {createNativeStackNavigator} from '@react-navigation/native-stack';

import type {HomeStackScreenParams} from '../../routes';
import {HomeScreenName, PreviewVideoScreenName, SaveResultScreenName} from '../../routes';
import {useStackScreenOptions} from '../../screenOptions';
import {HomeScreen} from './HomeScreen';
import {PreviewVideoScreen} from './PreviewVideoScreen';
import {SaveResultScreen} from './SaveResultScreen';

const home = createNativeStackNavigator<HomeStackScreenParams>();
export const HomeStackNavigator = () => {
  const {defaultScreen, fullScreen} = useStackScreenOptions();
  return (
    <home.Navigator screenOptions={defaultScreen}>
      <home.Screen name={HomeScreenName} component={HomeScreen} options={fullScreen} />
      <home.Screen
        name={SaveResultScreenName}
        component={SaveResultScreen}
        options={{
          title: 'Save Measurement Result',
        }}
      />
      <home.Screen name={PreviewVideoScreenName} component={PreviewVideoScreen} />
    </home.Navigator>
  );
};
