import type {ComponentProps} from 'react';
import {forwardRef, memo, useMemo, useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';

const Component = forwardRef<ScrollView, ComponentProps<typeof ScrollView>>(
  ({contentContainerStyle, ...props}, ref) => {
    const [pageHeight, setPageHeight] = useState(0);

    const mergedContentContainerStyle = useMemo(() => {
      return StyleSheet.flatten([{minHeight: pageHeight}, contentContainerStyle]);
    }, [contentContainerStyle, pageHeight]);

    return (
      <ScrollView
        onLayout={e => {
          setPageHeight(e.nativeEvent.layout.height);
        }}
        contentContainerStyle={mergedContentContainerStyle}
        {...props}
        ref={ref}
      />
    );
  },
);
export const PageFillingScrollView = memo(Component);
