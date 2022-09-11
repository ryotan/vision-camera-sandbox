import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import type {RootStackScreenParams} from './routes';

export type RootStackScreenProps<T extends keyof RootStackScreenParams> = NativeStackScreenProps<
  RootStackScreenParams,
  T
>;
