import {NavigationContainer} from '@react-navigation/native';
import {StyleUtilitiesProvider, ThemeColorProvider} from '@ryotan-vision-camera-sandbox/ui-components';
import type {FunctionComponent} from 'react';
import {StrictMode} from 'react';
import {LogBox, StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {initialWindowMetrics, SafeAreaProvider} from 'react-native-safe-area-context';

import {ReactQueryClientProvider} from './contexts/react-query/ReactQueryClientProvider';
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
      <ReactQueryClientProvider>
        <ThemeColorProvider sourceColor="#22A9BC">
          <GestureHandlerRootView style={StyleSheet.absoluteFill}>
            <SafeAreaProvider initialMetrics={initialWindowMetrics}>
              <StyleUtilitiesProvider>
                <NavigationContainer>
                  <RootStackNavigator />
                </NavigationContainer>
              </StyleUtilitiesProvider>
            </SafeAreaProvider>
          </GestureHandlerRootView>
        </ThemeColorProvider>
      </ReactQueryClientProvider>
    </StrictMode>
  );
};
