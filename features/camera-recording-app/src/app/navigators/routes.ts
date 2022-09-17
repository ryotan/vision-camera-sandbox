import type {NavigatorScreenParams} from '@react-navigation/native';
import type {VideoFile} from 'react-native-vision-camera';

export const HomeScreenName = 'Home';
export type HomeScreenParams = undefined;

export const SaveVideoScreenName = 'SaveVideo';
export interface SaveVideoScreenParams {
  videoFile: VideoFile;
}

export const PreviewVideoScreenName = 'PreviewVideo';
export interface PreviewVideoScreenParams {
  videoFile: VideoFile;
}

export const HomeStackNavigatorScreenName = 'HomeStackNavigator';
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type HomeStackScreenParams = {
  [HomeScreenName]: HomeScreenParams;
  [SaveVideoScreenName]: SaveVideoScreenParams;
  [PreviewVideoScreenName]: PreviewVideoScreenParams;
};

export const HistoryScreenName = 'History';
export type HistoryScreenParams = undefined;

export const DetailScreenName = 'Detail';
export type DetailScreenParams = undefined;

export const HistoryStackNavigatorScreenName = 'HistoryStackNavigator';
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type HistoryStackScreenParams = {
  [HistoryScreenName]: HistoryScreenParams;
  [DetailScreenName]: DetailScreenParams;
};

export const ConfigScreenName = 'Config';
export type ConfigScreenParams = undefined;

export const BottomTabNavigatorScreenName = 'BottomTabNavigator';
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type BottomTabScreenParams = {
  [HomeStackNavigatorScreenName]: NavigatorScreenParams<HomeStackScreenParams>;
  [HistoryStackNavigatorScreenName]: NavigatorScreenParams<HistoryStackScreenParams>;
  [ConfigScreenName]: ConfigScreenParams;
};

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type RootStackScreenParams = {
  [BottomTabNavigatorScreenName]: NavigatorScreenParams<BottomTabScreenParams>;
};
