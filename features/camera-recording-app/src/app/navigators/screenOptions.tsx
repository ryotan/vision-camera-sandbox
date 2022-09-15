import type {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {useMemo} from 'react';

import {useThemeColors} from '../contexts/theme/useThemeColors';

export const stackScreenDefault: NativeStackNavigationOptions = {
  headerShown: true,
  // Disable the header shadow to match the bottom tab screen look
  headerShadowVisible: false,
};

export const stackScreenFullWindow: NativeStackNavigationOptions = {
  headerShown: false,
};

export const useBottomTabScreenOptions = () => {
  const color = useThemeColors();
  return useMemo(() => {
    return {
      defaultScreen: {
        // Disable the header by default because most screens are in stack navigator and it's better to use the header of stack navigator.
        headerShown: false,
        tabBarStyle: {
          backgroundColor: color.colorSurface,
          elevation: 0,
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: color.primary.toString(),
        tabBarInactiveTintColor: color.textColorTertiary.toString(),
      },
      screenWithoutStackNavigator: {
        headerShown: true,
        // Disable the header shadow to match the bottom tab screen look
        headerShadowVisible: false,
      },
    } as const;
  }, [color.colorSurface, color.primary, color.textColorTertiary]);
};
