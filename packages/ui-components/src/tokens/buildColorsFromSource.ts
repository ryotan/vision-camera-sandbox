import {argbFromHex, CorePalette, hexFromArgb, Scheme, SchemeAndroid} from '@material/material-color-utilities';

import type {Colors} from './colors';

export const buildColorsFromSource = (hex: string): {light: Colors; dark: Colors} => {
  const palette = CorePalette.of(argbFromHex(hex));
  const scheme = Scheme.lightFromCorePalette(palette);
  const darkScheme = Scheme.darkFromCorePalette(palette);
  const schemeAndroid = SchemeAndroid.lightFromCorePalette(palette);
  const darkSchemeAndroid = SchemeAndroid.darkFromCorePalette(palette);
  return {
    light: hexSchemeFromArgb(scheme, schemeAndroid),
    dark: hexSchemeFromArgb(darkScheme, darkSchemeAndroid),
  };
};

const hexSchemeFromArgb = (scheme: Scheme, schemeAndroid: SchemeAndroid): Colors => {
  return {
    primary: hexFromArgb(scheme.primary),
    onPrimary: hexFromArgb(scheme.onPrimary),
    primaryContainer: hexFromArgb(scheme.primaryContainer),
    onPrimaryContainer: hexFromArgb(scheme.onPrimaryContainer),
    secondary: hexFromArgb(scheme.secondary),
    onSecondary: hexFromArgb(scheme.onSecondary),
    secondaryContainer: hexFromArgb(scheme.secondaryContainer),
    onSecondaryContainer: hexFromArgb(scheme.onSecondaryContainer),
    tertiary: hexFromArgb(scheme.tertiary),
    onTertiary: hexFromArgb(scheme.onTertiary),
    tertiaryContainer: hexFromArgb(scheme.tertiaryContainer),
    onTertiaryContainer: hexFromArgb(scheme.onTertiaryContainer),
    error: hexFromArgb(scheme.error),
    onError: hexFromArgb(scheme.onError),
    errorContainer: hexFromArgb(scheme.errorContainer),
    onErrorContainer: hexFromArgb(scheme.onErrorContainer),
    background: hexFromArgb(scheme.background),
    onBackground: hexFromArgb(scheme.onBackground),
    surface: hexFromArgb(scheme.surface),
    onSurface: hexFromArgb(scheme.onSurface),
    surfaceVariant: hexFromArgb(scheme.surfaceVariant),
    onSurfaceVariant: hexFromArgb(scheme.onSurfaceVariant),
    outline: hexFromArgb(scheme.outline),
    outlineVariant: hexFromArgb(scheme.outlineVariant),
    shadow: hexFromArgb(scheme.shadow),
    scrim: hexFromArgb(scheme.scrim),
    inverseSurface: hexFromArgb(scheme.inverseSurface),
    inverseOnSurface: hexFromArgb(scheme.inverseOnSurface),
    inversePrimary: hexFromArgb(scheme.inversePrimary),
    colorAccentPrimary: hexFromArgb(schemeAndroid.colorAccentPrimary),
    colorAccentPrimaryVariant: hexFromArgb(schemeAndroid.colorAccentPrimaryVariant),
    colorAccentSecondary: hexFromArgb(schemeAndroid.colorAccentSecondary),
    colorAccentSecondaryVariant: hexFromArgb(schemeAndroid.colorAccentSecondaryVariant),
    colorAccentTertiary: hexFromArgb(schemeAndroid.colorAccentTertiary),
    colorAccentTertiaryVariant: hexFromArgb(schemeAndroid.colorAccentTertiaryVariant),
    textColorPrimary: hexFromArgb(schemeAndroid.textColorPrimary),
    textColorSecondary: hexFromArgb(schemeAndroid.textColorSecondary),
    textColorTertiary: hexFromArgb(schemeAndroid.textColorTertiary),
    textColorPrimaryInverse: hexFromArgb(schemeAndroid.textColorPrimaryInverse),
    textColorSecondaryInverse: hexFromArgb(schemeAndroid.textColorSecondaryInverse),
    textColorTertiaryInverse: hexFromArgb(schemeAndroid.textColorTertiaryInverse),
    colorBackground: hexFromArgb(schemeAndroid.colorBackground),
    colorBackgroundFloating: hexFromArgb(schemeAndroid.colorBackgroundFloating),
    colorSurface: hexFromArgb(schemeAndroid.colorSurface),
    colorSurfaceVariant: hexFromArgb(schemeAndroid.colorSurfaceVariant),
    colorSurfaceHighlight: hexFromArgb(schemeAndroid.colorSurfaceHighlight),
    surfaceHeader: hexFromArgb(schemeAndroid.surfaceHeader),
    underSurface: hexFromArgb(schemeAndroid.underSurface),
    offState: hexFromArgb(schemeAndroid.offState),
    accentSurface: hexFromArgb(schemeAndroid.accentSurface),
    textPrimaryOnAccent: hexFromArgb(schemeAndroid.textPrimaryOnAccent),
    textSecondaryOnAccent: hexFromArgb(schemeAndroid.textSecondaryOnAccent),
    volumeBackground: hexFromArgb(schemeAndroid.volumeBackground),
  };
};
