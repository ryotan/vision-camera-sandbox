import {useAppStateValue} from '@ryotan-vision-camera-sandbox/react-query-app-state';

import {borderRadii, borderWidth, fontFamily, fontScale, fontWeight, spacing} from '../tokens';

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
