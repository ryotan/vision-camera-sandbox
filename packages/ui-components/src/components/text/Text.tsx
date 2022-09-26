import {forwardRef, memo, useMemo} from 'react';
import type {TextProps} from 'react-native';
import {StyleSheet, Text as RNText} from 'react-native';

import {useThemeColors, useThemeTokens} from '../../contexts';
import type {Colors, fontScale, fontWeight} from '../../tokens';

export const Component = forwardRef<
  RNText,
  TextProps & {color?: keyof Colors; scale?: keyof typeof fontScale; weight?: keyof typeof fontWeight}
>(({style, color = 'onSurface', scale = '4', weight = 'regular', ...props}, ref) => {
  const colors = useThemeColors();
  const {fontScale, fontWeight} = useThemeTokens();
  const mergedStyle = useMemo(() => {
    return StyleSheet.flatten([{color: colors[color], ...fontScale[scale], fontWeight: fontWeight[weight]}, style]);
  }, [color, colors, fontScale, fontWeight, scale, style, weight]);

  return <RNText {...props} style={mergedStyle} ref={ref} />;
});

export const Text = memo(Component);
