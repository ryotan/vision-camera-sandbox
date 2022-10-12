import {useThemeColors, VideoThumbnailIcon} from '@ryotan-vision-camera-sandbox/ui-components';
import * as ExpoFileSystem from 'expo-file-system';
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
          // FIXME: Video files which has no key frame must be removed when the recoding error has occurred.
          //        But we cannot know the file path when the error has occurred.
          ExpoFileSystem.deleteAsync(videoFileUri).catch(() => {
            // ignore
          });
          console.error(videoFileUri, e);
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
