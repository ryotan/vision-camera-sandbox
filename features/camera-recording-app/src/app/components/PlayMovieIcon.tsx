import {memo} from 'react';
import type {SvgProps} from 'react-native-svg';
import Svg, {Path} from 'react-native-svg';

import type {IconProps} from './IconProps';

const SvgComponent = (props: SvgProps) => (
  <Svg x={0} y={0} viewBox="0 0 512 512" {...props}>
    <Path d="M207.063 167.141a3.4 3.4 0 0 0-3.406-.031 3.401 3.401 0 0 0-1.688 2.938V341.939a3.38 3.38 0 0 0 1.688 2.938 3.328 3.328 0 0 0 3.406-.031l144-85.953c1.031-.594 1.641-1.703 1.641-2.906 0-1.172-.609-2.297-1.641-2.891l-144-85.955z" />
    <Path d="M256 0C114.625 0 0 114.625 0 256s114.625 256 256 256 256-114.625 256-256S397.375 0 256 0zm0 448c-105.875 0-192-86.125-192-192S150.125 64 256 64s192 86.125 192 192-86.125 192-192 192z" />
  </Svg>
);

export const PlayMovieIcon = memo<IconProps>(({color, size}) => {
  return <SvgComponent width={size} height={size} fill={color} />;
});
