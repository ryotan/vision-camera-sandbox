import {useAppStateValue} from '@ryotan-vision-camera-sandbox/react-query-app-state';
import {
  borderRadii,
  borderWidth,
  fontFamily,
  fontScale,
  fontWeight,
  spacing,
} from '@ryotan-vision-camera-sandbox/ui-components';

const tokens = {
  borderRadii,
  borderWidth,
  spacing,
  fontFamily,
  fontScale,
  fontWeight,
};

export const useThemeTokens = () => {
  return useAppStateValue(['theme', 'tokens'], tokens);
};
