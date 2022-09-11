import {createNativeStackNavigator} from '@react-navigation/native-stack';

import type {HistoryStackScreenParams} from '../../routes';
import {DetailScreenName, HistoryScreenName} from '../../routes';
import {stackScreenDefault} from '../../screenOptions';
import {DetailScreen} from './DetailScreen';
import {HistoryScreen} from './HistoryScreen';

const history = createNativeStackNavigator<HistoryStackScreenParams>();
export const HistoryStackNavigator = () => {
  return (
    <history.Navigator screenOptions={stackScreenDefault}>
      <history.Screen name={HistoryScreenName} component={HistoryScreen} />
      <history.Screen name={DetailScreenName} component={DetailScreen} />
    </history.Navigator>
  );
};
