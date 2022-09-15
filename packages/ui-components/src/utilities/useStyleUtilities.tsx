import type {PropsWithChildren} from 'react';
import {createContext, useContext, useMemo} from 'react';
import {Dimensions, PixelRatio} from 'react-native';
import {useSafeAreaFrame} from 'react-native-safe-area-context';

type RatioToPixel = (ratio?: number) => number | undefined;
interface StyleUtilities {
  vh: RatioToPixel;
  vw: RatioToPixel;
  vmin: RatioToPixel;
  vmax: RatioToPixel;
  sh: RatioToPixel;
  sw: RatioToPixel;
  smin: RatioToPixel;
  smax: RatioToPixel;
}

export const useStyleUtilities = (): StyleUtilities => {
  return useContext(StyleUtilityContext);
};

const StyleUtilityContext = createContext<StyleUtilities>({} as StyleUtilities);

const frameRatioPixel = (frame: number, ratio?: number) => {
  if (!ratio) {
    return ratio;
  }
  if (ratio === 100) {
    return frame;
  }

  // TODO: Cache major values like ratio=0.1, 0.5 etc.
  return PixelRatio.roundToNearestPixel(frame * (ratio / 100));
};

export function StyleUtilitiesProvider({children}: PropsWithChildren<unknown>) {
  const {height, width} = useSafeAreaFrame();
  const styleUtilities = useMemo<StyleUtilities>(() => {
    const dim = Dimensions.get('screen');
    const vmax = Math.max(height, width);
    const vmin = Math.min(height, width);
    const smax = Math.max(dim.height, width);
    const smin = Math.min(dim.width, width);
    return {
      vh: (ratio?: number) => frameRatioPixel(height, ratio),
      vw: (ratio?: number) => frameRatioPixel(width, ratio),
      vmin: (ratio?: number) => frameRatioPixel(vmax, ratio),
      vmax: (ratio?: number) => frameRatioPixel(vmin, ratio),
      sh: (ratio?: number) => frameRatioPixel(dim.height, ratio),
      sw: (ratio?: number) => frameRatioPixel(dim.width, ratio),
      smin: (ratio?: number) => frameRatioPixel(smin, ratio),
      smax: (ratio?: number) => frameRatioPixel(smax, ratio),
    };
  }, [height, width]);

  return <StyleUtilityContext.Provider value={styleUtilities}>{children}</StyleUtilityContext.Provider>;
}
