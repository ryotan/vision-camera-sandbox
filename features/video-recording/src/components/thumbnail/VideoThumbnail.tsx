import {useThemeColors, VideoThumbnailIcon} from '@ryotan-vision-camera-sandbox/ui-components';
import * as VideoThumbnails from 'expo-video-thumbnails';
import type {FC} from 'react';
import {forwardRef, memo, useEffect, useState} from 'react';
import type {ImageProps} from 'react-native';
import {Image, View} from 'react-native';

interface Props {
  videoFileUri: string;
  thumbnailUri?: string;
  imageProps?: Omit<ImageProps, 'source'>;
}
const Component: FC<Props> = forwardRef<Image, Props>(({videoFileUri, thumbnailUri, imageProps}, ref) => {
  const [imageUri, setImageUri] = useState(thumbnailUri);
  const colors = useThemeColors();

  useEffect(() => {
    if (!thumbnailUri) {
      VideoThumbnails.getThumbnailAsync(videoFileUri, {time: 0})
        .then(({uri}) => {
          setImageUri(uri);
        })
        .catch(e => {
          console.error(e);
        });
    }
  }, [thumbnailUri, videoFileUri]);

  if (!imageUri) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <VideoThumbnailIcon color={colors.outlineVariant} size={30} />
      </View>
    );
  }

  return <Image source={{uri: imageUri}} style={{flex: 1}} ref={ref} resizeMode="contain" {...imageProps} />;
});

export const VideoThumbnail = memo(Component);
