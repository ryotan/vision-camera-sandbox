import type {CompositeScreenProps} from '@react-navigation/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import type {ConfigStackScreenParams} from '../../routes';
import type {BottomTabScreenProps} from '../BottomTabScreenProps';

export type ConfigStackScreenProps<T extends keyof ConfigStackScreenParams> = CompositeScreenProps<
  NativeStackScreenProps<ConfigStackScreenParams, T>,
  BottomTabScreenProps<'ConfigStackNavigator'>
>;
