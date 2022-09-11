import type {BottomTabScreenProps as ReactNavigationBottomTabScreenProps} from '@react-navigation/bottom-tabs';
import type {CompositeScreenProps} from '@react-navigation/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import type {BottomTabScreenParams, RootStackScreenParams} from '../routes';

export type BottomTabScreenProps<T extends keyof BottomTabScreenParams> = CompositeScreenProps<
  ReactNavigationBottomTabScreenProps<BottomTabScreenParams, T>,
  NativeStackScreenProps<RootStackScreenParams>
>;
