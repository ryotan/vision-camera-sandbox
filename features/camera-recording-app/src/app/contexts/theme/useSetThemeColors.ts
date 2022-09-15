import {useSetAppState} from '@ryotan-vision-camera-sandbox/react-query-app-state';
import {useCallback} from 'react';

import {colors} from './useThemeColors';

export const useSetThemeColors = () => {
  const setThemeColor = useSetAppState(['theme', 'colors']);
  return useCallback(
    (colorScheme: 'light' | 'dark') => {
      setThemeColor(colors[colorScheme]);
    },
    [setThemeColor],
  );
};
