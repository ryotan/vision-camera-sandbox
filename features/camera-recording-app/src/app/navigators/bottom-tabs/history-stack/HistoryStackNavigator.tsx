import {createNativeStackNavigator} from '@react-navigation/native-stack';

import type {HistoryStackScreenParams} from '../../routes';
import {DetailScreenName, HistoryScreenName} from '../../routes';
import {useStackScreenOptions} from '../../screenOptions';
import {DetailScreen} from './DetailScreen';
import {HistoryScreen} from './HistoryScreen';

const history = createNativeStackNavigator<HistoryStackScreenParams>();
export const HistoryStackNavigator = () => {
  const {defaultScreen} = useStackScreenOptions();
  return (
    <history.Navigator screenOptions={defaultScreen}>
      <history.Screen name={HistoryScreenName} component={HistoryScreen} />
      <history.Screen name={DetailScreenName} component={DetailScreen} />
    </history.Navigator>
  );
};
