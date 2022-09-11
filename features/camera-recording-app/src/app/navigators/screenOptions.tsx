import type {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import type {NativeStackNavigationOptions} from '@react-navigation/native-stack';

export const stackScreenDefault: NativeStackNavigationOptions = {
  headerShown: true,
  // Disable the header shadow to match the bottom tab screen look
  headerShadowVisible: false,
};

export const stackScreenFullWindow: NativeStackNavigationOptions = {
  headerShown: false,
};

export const bottomTabScreenDefault: BottomTabNavigationOptions = {
  // Disable the header by default because most screens are in stack navigator and it's better to use the header of stack navigator.
  headerShown: false,
};

export const bottomTabScreenWithoutStackNavigator: BottomTabNavigationOptions = {
  headerShown: true,
  // Disable the header shadow to match the bottom tab screen look
  headerShadowVisible: false,
};
