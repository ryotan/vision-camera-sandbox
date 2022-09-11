import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'expo-status-bar';
import type {FunctionComponent} from 'react';
import {StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {initialWindowMetrics, SafeAreaProvider} from 'react-native-safe-area-context';

import {RootStackNavigator} from './navigators/RootStackNavigator';

export const App: FunctionComponent = () => {
  return (
    <GestureHandlerRootView style={StyleSheet.absoluteFill}>
      <StatusBar style="dark" animated />
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <NavigationContainer>
          <RootStackNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};
