import type {FC, PropsWithChildren} from 'react';
import {useEffect} from 'react';
import {Appearance} from 'react-native';

import {useSetThemeColors} from './theme/useSetThemeColors';

export const ColorSchemeChangeEventListenerProvider: FC<PropsWithChildren> = ({children}) => {
  const setThemeColors = useSetThemeColors();
  useEffect(() => {
    const subscription = Appearance.addChangeListener(({colorScheme}) => {
      console.debug('colorScheme changed', colorScheme);
      setThemeColors(colorScheme ?? 'light');
    });
    return () => subscription.remove();
  }, [setThemeColors]);
  return <>{children}</>;
};
