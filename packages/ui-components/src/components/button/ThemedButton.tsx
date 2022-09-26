import {forwardRef, useMemo} from 'react';
import type {PressableProps, View} from 'react-native';
import {StyleSheet} from 'react-native';

import {useThemeColors, useThemeTokens} from '../../contexts';
import type {Colors} from '../../tokens';
import {Text} from '../text';
import {Button} from './Button';

const Component = forwardRef<
  View,
  Omit<PressableProps, 'children'> & {
    title?: string;
    backgroundColor?: keyof Colors;
    foregroundColor?: keyof Colors;
    borderColor?: keyof Colors;
  }
>(({style, title, backgroundColor, foregroundColor, borderColor, ...props}, ref) => {
  const colors = useThemeColors();
  const {borderRadii, borderWidth} = useThemeTokens();

  const mergedContainerStyle = useMemo(() => {
    return StyleSheet.flatten([
      {
        ...(backgroundColor ? {backgroundColor: colors[backgroundColor]} : {}),
        ...(borderColor ? {borderColor: colors[borderColor], borderWidth: borderWidth['1']} : {}),
        borderRadius: borderRadii.large,
        flex: 1,
      },
      styles.container,
      style,
    ]);
  }, [backgroundColor, borderColor, borderRadii.large, borderWidth, colors, style]);
  const mergedTextStyle = useMemo(() => {
    return StyleSheet.flatten([{...(foregroundColor ? {color: colors[foregroundColor]} : {})}]);
  }, [colors, foregroundColor]);
  return (
    <Button {...props} style={mergedContainerStyle} ref={ref}>
      {!!title && <Text style={mergedTextStyle}>{title}</Text>}
    </Button>
  );
});
export const ThemedButton = Component;

const styles = StyleSheet.create({
  container: {
    padding: 13,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
