import {useAppState} from '@ryotan-vision-camera-sandbox/react-query-app-state';
import {
  buildColorsFromSource,
  CenteredView,
  OutlinedButton,
  Text,
  useThemeColors,
} from '@ryotan-vision-camera-sandbox/ui-components';
import type {FC} from 'react';
import {useCallback, useState} from 'react';
import {Appearance, ScrollView, View} from 'react-native';

import type {ColorPaletteScreenName} from '../../routes';
import type {ConfigStackScreenProps} from './ConfigStackScreenProps';

const sourceColors = ['#bf0025', '#22A9BC'];
const builtColors = buildColorsFromSource('#bf0025');
const themeColors = builtColors[Appearance.getColorScheme() ?? 'light'];

export const ColorPaletteScreen: FC<ConfigStackScreenProps<typeof ColorPaletteScreenName>> = () => {
  const colors = useThemeColors();

  const [sourceColorIndex, setSourceColorIndex] = useState(0);

  const [, setThemeColors] = useAppState(['theme', 'colors'], themeColors);

  const toggleSourceColor = useCallback(() => {
    setSourceColorIndex(curr => curr + 1);
    const newColors = buildColorsFromSource(sourceColors[sourceColorIndex % sourceColors.length]);
    const newThemeColors = newColors[Appearance.getColorScheme() ?? 'light'];
    setThemeColors(newThemeColors);
  }, [setThemeColors, sourceColorIndex]);

  return (
    <ScrollView contentContainerStyle={{backgroundColor: colors.background}}>
      <CenteredView>
        <View style={{margin: 20}}>
          <OutlinedButton title="Change source color" onPress={toggleSourceColor} />
        </View>
        <View style={{backgroundColor: colors.primary, margin: 20, padding: 20}}>
          <Text style={{color: colors.onPrimary}}>Primary</Text>
        </View>
        <View style={{backgroundColor: colors.primaryContainer, margin: 20, padding: 20}}>
          <Text style={{color: colors.onPrimaryContainer}}>Primary Container</Text>
        </View>
        <View style={{backgroundColor: colors.secondary, margin: 20, padding: 20}}>
          <Text style={{color: colors.onSecondary}}>Secondary</Text>
        </View>
        <View style={{backgroundColor: colors.secondaryContainer, margin: 20, padding: 20}}>
          <Text style={{color: colors.onSecondaryContainer}}>Secondary Container</Text>
        </View>
        <View style={{backgroundColor: colors.tertiary, margin: 20, padding: 20}}>
          <Text style={{color: colors.onTertiary}}>Tertiary</Text>
        </View>
        <View style={{backgroundColor: colors.tertiaryContainer, margin: 20, padding: 20}}>
          <Text style={{color: colors.onTertiaryContainer}}>Tertiary Container</Text>
        </View>
        <View style={{backgroundColor: colors.error, margin: 20, padding: 20}}>
          <Text style={{color: colors.onError}}>Error</Text>
        </View>
        <View style={{backgroundColor: colors.errorContainer, margin: 20, padding: 20}}>
          <Text style={{color: colors.onErrorContainer}}>Error Container</Text>
        </View>
        <View style={{backgroundColor: colors.surface, margin: 20, padding: 20}}>
          <Text style={{color: colors.onSurface}}>Surface</Text>
        </View>
        <View style={{backgroundColor: colors.surfaceVariant, margin: 20, padding: 20}}>
          <Text style={{color: colors.onSurfaceVariant}}>Surface Variant</Text>
        </View>
        <View style={{borderWidth: 1, borderColor: colors.outline, margin: 20, padding: 20}}>
          <Text style={{color: colors.onSurface}}>Outline</Text>
        </View>
        <View style={{borderWidth: 1, borderColor: colors.outlineVariant, margin: 20, padding: 20}}>
          <Text style={{color: colors.onSurface}}>Outline Variant</Text>
        </View>
        <View style={{backgroundColor: colors.inverseSurface, margin: 20, padding: 20}}>
          <Text style={{color: colors.surface}}>Inverse Surface</Text>
        </View>
        <View style={{backgroundColor: colors.inversePrimary, margin: 20, padding: 20}}>
          <Text style={{color: colors.primary}}>Inverse Primary</Text>
        </View>
        <View style={{backgroundColor: colors.colorAccentPrimary, margin: 20, padding: 20}}>
          <Text style={{color: colors.textPrimaryOnAccent}}>Color Accent Primary</Text>
        </View>
        <View style={{backgroundColor: colors.colorAccentPrimaryVariant, margin: 20, padding: 20}}>
          <Text style={{color: colors.textColorPrimaryInverse}}>Color Accent Primary Variant</Text>
        </View>
        <View style={{backgroundColor: colors.colorAccentSecondary, margin: 20, padding: 20}}>
          <Text style={{color: colors.textSecondaryOnAccent}}>Color Accent Secondary</Text>
        </View>
        <View style={{backgroundColor: colors.colorAccentSecondaryVariant, margin: 20, padding: 20}}>
          <Text style={{color: colors.textColorSecondaryInverse}}>Color Accent Secondary Variant</Text>
        </View>
        <View style={{backgroundColor: colors.colorBackground, margin: 20, padding: 20}}>
          <Text style={{color: colors.textColorPrimary}}>Color Background</Text>
        </View>
        <View style={{backgroundColor: colors.colorBackgroundFloating, margin: 20, padding: 20}}>
          <Text style={{color: colors.textColorSecondary}}>Color Background Floating</Text>
        </View>
        <View style={{backgroundColor: colors.colorSurface, margin: 20, padding: 20}}>
          <Text style={{color: colors.textColorTertiary}}>Color Surface</Text>
        </View>
        <View style={{backgroundColor: colors.colorSurfaceVariant, margin: 20, padding: 20}}>
          <Text style={{color: colors.onSurface}}>Color Surface Variant</Text>
        </View>
        <View style={{backgroundColor: colors.colorSurfaceHighlight, margin: 20, padding: 20}}>
          <Text style={{color: colors.onSurface}}>Color Surface Highlight</Text>
        </View>
        <View style={{backgroundColor: colors.surfaceHeader, margin: 20, padding: 20}}>
          <Text style={{color: colors.onSurface}}>Surface Header</Text>
        </View>
        <View style={{backgroundColor: colors.underSurface, margin: 20, padding: 20}}>
          <Text style={{color: colors.onSurface}}>Under Surface</Text>
        </View>
        <View style={{backgroundColor: colors.offState, margin: 20, padding: 20}}>
          <Text style={{color: colors.onSurface}}>Off State</Text>
        </View>
        <View style={{backgroundColor: colors.accentSurface, margin: 20, padding: 20}}>
          <Text style={{color: colors.onSurface}}>Accent Surface</Text>
        </View>
        <View style={{backgroundColor: colors.volumeBackground, margin: 20, padding: 20}}>
          <Text style={{color: colors.onSurface}}>Volume Background</Text>
        </View>
      </CenteredView>
    </ScrollView>
  );
};
