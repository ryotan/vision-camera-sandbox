import {forwardRef, memo} from 'react';
import type {PressableProps, View} from 'react-native';
import {Pressable} from 'react-native';

const Component = forwardRef<View, PressableProps>((props, ref) => {
  return <Pressable {...props} ref={ref} />;
});
export const Button = memo(Component);
