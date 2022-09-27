import {memo} from 'react';
import type {SvgProps} from 'react-native-svg';
import Svg, {Path} from 'react-native-svg';

import type {IconProps} from './IconProps';

// original data: https://uxwing.com/play-button-icon/
// license: https://uxwing.com/license/
const SvgComponent = (props: SvgProps) => (
  <Svg x={0} y={0} viewBox="0 0 122.88 91.24" {...props}>
    <Path d="M6.23,0H116.7c1.72,0,3.25,0.7,4.37,1.81c1.11,1.11,1.81,2.69,1.81,4.37v78.88c0,1.72-0.7,3.25-1.81,4.37 c-0.09,0.09-0.19,0.19-0.33,0.28c-1.07,0.98-2.51,1.53-4.09,1.53H6.18c-1.72,0-3.25-0.7-4.37-1.81C0.7,88.32,0,86.74,0,85.06V6.18 c0-1.72,0.7-3.25,1.81-4.37S4.51,0,6.18,0L6.23,0L6.23,0L6.23,0z M31.74,21.42c4.9,0,8.87,3.97,8.87,8.86 c0,4.9-3.97,8.87-8.87,8.87s-8.87-3.97-8.87-8.87C22.87,25.39,26.84,21.42,31.74,21.42L31.74,21.42L31.74,21.42z M69.05,59.46 l17.73-30.66l18.84,47.65l-87.92,0v-5.91l7.39-0.37l7.39-18.1l3.69,12.93h11.08l9.6-24.75L69.05,59.46L69.05,59.46L69.05,59.46z M115.54,7.34H7.39v76.51h108.15L115.54,7.34L115.54,7.34L115.54,7.34z" />
  </Svg>
);

export const VideoThumbnailIcon = memo<IconProps>(({color, size}) => {
  return <SvgComponent width={size} height={size} fill={color} />;
});
