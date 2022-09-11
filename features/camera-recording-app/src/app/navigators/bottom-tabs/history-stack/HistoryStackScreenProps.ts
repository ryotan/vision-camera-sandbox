import type {CompositeScreenProps} from '@react-navigation/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import type {HistoryStackScreenParams, RootStackScreenParams} from '../../routes';
import type {BottomTabScreenProps} from '../BottomTabScreenProps';

export type HistoryStackScreenProps<T extends keyof HistoryStackScreenParams> = CompositeScreenProps<
  NativeStackScreenProps<HistoryStackScreenParams, T>,
  CompositeScreenProps<BottomTabScreenProps<'HistoryStackNavigator'>, NativeStackScreenProps<RootStackScreenParams>>
>;
