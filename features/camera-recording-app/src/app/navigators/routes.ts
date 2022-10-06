import type {NavigatorScreenParams} from '@react-navigation/native';
import type {VideoFile} from 'react-native-vision-camera';

export const HomeScreenName = 'Home';
export type HomeScreenParams = undefined;

export const SaveResultScreenName = 'SaveResult';
export interface SaveResultScreenParams {
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
  [SaveResultScreenName]: SaveResultScreenParams;
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

export const ColorPaletteScreenName = 'ColorPalette';
export type ColorPaletteScreenParams = undefined;

export const ConfigStackNavigatorScreenName = 'ConfigStackNavigator';
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type ConfigStackScreenParams = {
  [ConfigScreenName]: ConfigScreenParams;
  [ColorPaletteScreenName]: ColorPaletteScreenParams;
};

export const BottomTabNavigatorScreenName = 'BottomTabNavigator';
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type BottomTabScreenParams = {
  [HomeStackNavigatorScreenName]: NavigatorScreenParams<HomeStackScreenParams>;
  [HistoryStackNavigatorScreenName]: NavigatorScreenParams<HistoryStackScreenParams>;
  [ConfigStackNavigatorScreenName]: NavigatorScreenParams<ConfigStackScreenParams>;
};

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type RootStackScreenParams = {
  [BottomTabNavigatorScreenName]: NavigatorScreenParams<BottomTabScreenParams>;
};
