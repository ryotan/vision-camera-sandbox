import {useAppState} from '@ryotan-vision-camera-sandbox/react-query-app-state';

import type {Colors} from '../tokens';

export const useThemeColors = (): Colors => {
  const [colors] = useAppState(['theme', 'colors']);
  return colors!;
};
