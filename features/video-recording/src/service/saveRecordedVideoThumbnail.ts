import * as ExpoFileSystem from 'expo-file-system';
import * as VideoThumbnails from 'expo-video-thumbnails';

const extractExtension = (path: string) => {
  const match = path.match(/\.(\w+)$/);
  return match ? match[1] : 'jpg';
};

// FIXME: Handle errors
export const saveRecordedVideoThumbnail = async (videoFileUri: string) => {
  const thumbnail = await VideoThumbnails.getThumbnailAsync(videoFileUri, {time: 0});
  const ext = extractExtension(thumbnail.uri);
  const thumbnailUri = `${videoFileUri}.${ext}`;
  await ExpoFileSystem.moveAsync({from: thumbnail.uri, to: thumbnailUri});

  return thumbnailUri;
};
