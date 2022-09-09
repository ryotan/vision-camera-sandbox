import type {FunctionComponent} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const App: FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <Text>Hello, world!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
