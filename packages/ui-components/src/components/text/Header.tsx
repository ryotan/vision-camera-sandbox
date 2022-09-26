import type {ComponentProps, FC} from 'react';
import {forwardRef, memo} from 'react';
import type {Text as RNText, TextProps} from 'react-native';

import {Text} from './Text';

const Component: FC<TextProps> = forwardRef<RNText, ComponentProps<typeof Text>>((props, ref) => {
  return <Text weight="bold" color="secondary" scale="5" {...props} ref={ref}></Text>;
});

export const Header = memo(Component);
