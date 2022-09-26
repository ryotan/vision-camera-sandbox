import {forwardRef, memo} from 'react';
import type {PressableProps, View} from 'react-native';

import {ThemedButton} from './ThemedButton';

const Component = forwardRef<View, Omit<PressableProps, 'children'> & {title?: string}>((props, ref) => {
  return <ThemedButton {...props} foregroundColor="outline" borderColor="outline" ref={ref} />;
});
export const OutlinedButton = memo(Component);
