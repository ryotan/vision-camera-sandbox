import {forwardRef, memo} from 'react';
import type {ViewProps} from 'react-native';
import {StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
  },
});

const Component = forwardRef<View, ViewProps>(({style, ...props}, ref) => {
  return <View style={StyleSheet.flatten([styles.centered, style])} {...props} ref={ref} />;
});
export const CenteredView = memo(Component);
