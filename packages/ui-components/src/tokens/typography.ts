import {Platform} from 'react-native';

export const fontFamily = {
  sans: Platform.select({
    ios: 'System',
    default: 'sans-serif',
  } as const),
  serif: Platform.select({
    ios: 'Palatino',
    default: 'serif',
  } as const),
  mono: Platform.select({
    ios: 'Menlo',
    default: 'monospace',
  } as const),
};

const getScaledTypography = (fontSize: number, condensed: boolean) => {
  return {
    fontSize,
    lineHeight: fontSize * (condensed ? 1.25 : 1.5),
  } as const;
};

export const fontScale = {
  '000': getScaledTypography(8, false),
  '000.condensed': getScaledTypography(8, true),
  '00': getScaledTypography(12, false),
  '00.condensed': getScaledTypography(12, true),
  '0': getScaledTypography(13, false),
  '0.condensed': getScaledTypography(13, true),
  '1': getScaledTypography(14, false),
  '1.condensed': getScaledTypography(14, true),
  '2': getScaledTypography(15, false),
  '2.condensed': getScaledTypography(15, true),
  '3': getScaledTypography(16, false),
  '3.condensed': getScaledTypography(16, true),
  '4': getScaledTypography(18, false),
  '4.condensed': getScaledTypography(18, true),
  '5': getScaledTypography(20, false),
  '5.condensed': getScaledTypography(20, true),
  '6': getScaledTypography(22, false),
  '6.condensed': getScaledTypography(22, true),
  '7': getScaledTypography(24, false),
  '7.condensed': getScaledTypography(24, true),
  '8': getScaledTypography(26, false),
  '8.condensed': getScaledTypography(26, true),
  '9': getScaledTypography(27, false),
  '9.condensed': getScaledTypography(27, true),
  '10': getScaledTypography(28, false),
  '10.condensed': getScaledTypography(28, true),
  '11': getScaledTypography(32, false),
  '11.condensed': getScaledTypography(32, true),
  '12': getScaledTypography(40, false),
  '12.condensed': getScaledTypography(40, true),
} as const;

export const fontWeight = {
  thin: '100',
  'extra-light': '200',
  light: '300',
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  'extra-bold': '800',
  black: '900',
} as const;
