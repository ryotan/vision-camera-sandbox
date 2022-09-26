import type {FC} from 'react';
import {memo} from 'react';
import {View} from 'react-native';

import {useStyleUtilities} from '../../utilities';

interface Props {
  height?: number;
  vh?: number;
  width?: number;
  vw?: number;
}
const Component: FC<Props> = ({height, vh: vhValue, width, vw: vwHValue}) => {
  const {vw, vh} = useStyleUtilities();

  return (
    <View
      style={{
        paddingTop: height ?? vh(vhValue),
        paddingLeft: width ?? vw(vwHValue),
      }}
    />
  );
};
export const Spacer = memo(Component);
