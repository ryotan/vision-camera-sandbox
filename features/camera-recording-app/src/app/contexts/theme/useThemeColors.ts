import {useAppState} from '@ryotan-vision-camera-sandbox/react-query-app-state';
import {buildColorsFromSource} from '@ryotan-vision-camera-sandbox/ui-components';
import {Appearance} from 'react-native';

export const colors = buildColorsFromSource('#bf0025');
// export const colors = buildColorsFromSource('#22A9BC');

const initialThemeColors = colors[Appearance.getColorScheme() ?? 'light'];

export const useThemeColors = () => {
  const [colors] = useAppState(['theme', 'colors'], initialThemeColors, {select: data => data});
  return colors;
};
