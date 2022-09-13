import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'expo-status-bar';
import type {FunctionComponent} from 'react';
import {StrictMode} from 'react';
import {LogBox, StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {initialWindowMetrics, SafeAreaProvider} from 'react-native-safe-area-context';

import {RootStackNavigator} from './navigators/RootStackNavigator';

if (__DEV__) {
  LogBox.ignoreLogs([
    // StrictMode warning from react-native.
    'Please update the following components: AnimatedComponent',
  ]);
}

export const App: FunctionComponent = () => {
  return (
    <StrictMode>
      <GestureHandlerRootView style={StyleSheet.absoluteFill}>
        <StatusBar style="dark" animated />
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <NavigationContainer>
            <RootStackNavigator />
          </NavigationContainer>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </StrictMode>
  );
};
