import {forwardRef, memo} from 'react';
import type {TextInputProps} from 'react-native';
import {TextInput as RNTextInput} from 'react-native';

export const Component = forwardRef<RNTextInput, TextInputProps>((props: TextInputProps) => {
  return <RNTextInput {...props} />;
});

export const TextInput = memo(Component);
