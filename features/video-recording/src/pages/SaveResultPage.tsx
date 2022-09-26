import {
  Header,
  OutlinedButton,
  PageFillingScrollView,
  PrimaryButton,
  SecondaryButton,
  Spacer,
  Text,
  useStyleUtilities,
} from '@ryotan-vision-camera-sandbox/ui-components';
import type {FC} from 'react';
import {useCallback, useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import type {VideoFile} from 'react-native-vision-camera';

import {VideoThumbnail} from '../components/thumbnail/VideoThumbnail';
import {useMeasurementResultOperation} from '../use-cases/useMeasurementResultOperation';

interface Props {
  videoFile: VideoFile;
  navigateToPreviewScreen: (videoFile: VideoFile) => unknown;
  navigateAfterVideoFileSaved: (videoFile: VideoFile) => unknown;
  navigateWhenCanceled: (videoFile: VideoFile) => unknown;
}
export const SaveResultPage: FC<Props> = props => {
  console.debug('SaveResultPage is rendered');

  const {cancel, save} = useMeasurementResultOperation(props);

  const {videoFile, navigateToPreviewScreen} = props;
  const previewMeasurementResult = useCallback(() => {
    navigateToPreviewScreen(videoFile);
  }, [navigateToPreviewScreen, videoFile]);

  const styles = useStyles();
  return (
    <PageFillingScrollView contentContainerStyle={styles.container}>
      <View style={styles.mainContentContainer}>
        <View style={styles.headerContainer}>
          <Header>Recorded Video</Header>
        </View>
        <View style={styles.recordedVideoContainer}>
          <View style={styles.thumbnailContainer}>
            <VideoThumbnail videoFileUri={videoFile.path} />
          </View>
          <Spacer vw={5} />
          <View style={styles.videoInfoContainer}>
            <View style={styles.sideBySideVideoInfoRow}>
              <Text color="secondary">Duration</Text>
              <Text weight="bold">{props.videoFile.duration}s</Text>
            </View>
            <Spacer vh={1} />
            <View style={styles.sideBySideVideoInfoRow}>
              <Text color="secondary">Size</Text>
              <Text weight="bold">{props.videoFile.duration}s</Text>
            </View>
            <Spacer vh={1} />
            <View style={styles.videoPreviewButtonContainer}>
              <SecondaryButton title="Preview" onPress={previewMeasurementResult} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.bottomContentContainer}>
        <View style={styles.operationButtons}>
          <OutlinedButton title="Cancel" onPress={cancel} />
          <Spacer vw={10} />
          <PrimaryButton title="Save" onPress={save} />
        </View>
      </View>
    </PageFillingScrollView>
  );
};

const useStyles = () => {
  const {vw, vh, vmin} = useStyleUtilities();
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          paddingHorizontal: vw(3),
        },
        mainContentContainer: {
          flex: 1,
        },
        headerContainer: {
          paddingBottom: vmin(1),
        },
        recordedVideoContainer: {
          flexDirection: 'row',
          justifyContent: 'space-between',
        },
        thumbnailContainer: {
          width: '30%',
        },
        videoInfoContainer: {
          flex: 1,
        },
        sideBySideVideoInfoRow: {
          flexDirection: 'row',
          justifyContent: 'space-between',
        },
        videoPreviewButtonContainer: {
          flexDirection: 'row',
        },
        bottomContentContainer: {
          paddingVertical: vh(3),
        },
        operationButtons: {
          flexDirection: 'row',
        },
      } as const),
    [vh, vmin, vw],
  );
};
