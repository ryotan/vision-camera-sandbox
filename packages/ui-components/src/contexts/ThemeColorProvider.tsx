import {useAppState} from '@ryotan-vision-camera-sandbox/react-query-app-state';
import type {FC, PropsWithChildren} from 'react';
import {useEffect, useMemo} from 'react';
import {Appearance} from 'react-native';

import {buildColorsFromSource} from '../tokens';

type Props = PropsWithChildren<{
  sourceColor: string;
}>;
export const ThemeColorProvider: FC<Props> = ({children, sourceColor}) => {
  const colors = useMemo(() => {
    return buildColorsFromSource(sourceColor);
  }, [sourceColor]);
  const themeColors = colors[Appearance.getColorScheme() ?? 'light'];
  const [, setThemeColors] = useAppState(['theme', 'colors'], themeColors);
  useEffect(() => {
    setThemeColors(themeColors);
  }, [setThemeColors, themeColors]);

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({colorScheme}) => {
      console.debug('colorScheme changed', colorScheme);
      setThemeColors(colors[colorScheme ?? 'light']);
    });
    return () => subscription.remove();
  }, [colors, setThemeColors]);
  return <>{children}</>;
};
