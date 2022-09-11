import type {CompositeScreenProps} from '@react-navigation/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import type {HomeStackScreenParams, RootStackScreenParams} from '../../routes';
import type {BottomTabScreenProps} from '../BottomTabScreenProps';

export type HomeStackScreenProps<T extends keyof HomeStackScreenParams> = CompositeScreenProps<
  NativeStackScreenProps<HomeStackScreenParams, T>,
  CompositeScreenProps<BottomTabScreenProps<'HomeStackNavigator'>, NativeStackScreenProps<RootStackScreenParams>>
>;
