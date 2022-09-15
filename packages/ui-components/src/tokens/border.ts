import {StyleSheet} from 'react-native';

export const borderRadii = {
  '05': 2,
  '1': 4,
  '2': 8,
  '3': 12,
  '4': 16,
  '5': 20,
  '6': 30,
  base: 3,
  large: 6,
  circle: 9999,
} as const;

export const borderWidth = {
  hairline: StyleSheet.hairlineWidth,
  divider: 1,
  'divider.selected': 2,
  '05': 0.5,
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
} as const;
