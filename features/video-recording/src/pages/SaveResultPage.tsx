import {useBeforeRemoveListener} from '@ryotan-vision-camera-sandbox/focus-listener';
import {randomId} from '@ryotan-vision-camera-sandbox/random';
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

import {VideoThumbnail} from '../components';
import {useDeleteRecordedVideoFile} from '../service';
import type {PartialVideoRecordingResult, RecordedVideo, VideoRecordingResult} from '../types';
import {useMeasurementResultOperation} from '../use-cases';

interface Props {
  recordedVideo: RecordedVideo;
  navigateToPreviewScreen: (partialResult: PartialVideoRecordingResult) => unknown;
  navigateAfterVideoFileSaved: (result: VideoRecordingResult) => unknown;
  navigateWhenCanceled: (videoFile: VideoFile) => unknown;
}
export const SaveResultPage: FC<Props> = props => {
  console.debug('SaveResultPage is rendered');

  const {cancel, save} = useMeasurementResultOperation(props);

  const {recordedVideo, navigateToPreviewScreen} = props;
  const previewMeasurementResult = useCallback(() => {
    navigateToPreviewScreen(recordedVideo);
  }, [navigateToPreviewScreen, recordedVideo]);

  const id = randomId();

  const {mutateAsync: removeRecordedFile} = useDeleteRecordedVideoFile();
  useBeforeRemoveListener(
    useCallback(async () => {
      await removeRecordedFile(recordedVideo.videoFile);
    }, [recordedVideo.videoFile, removeRecordedFile]),
  );

  const styles = useStyles();
  return (
    <PageFillingScrollView contentContainerStyle={styles.container}>
      <View style={styles.mainContentContainer}>
        <View style={styles.headerContainer}>
          <Header>Recorded Video</Header>
        </View>
        <View style={styles.recordedVideoContainer}>
          <View style={styles.thumbnailContainer}>
            <VideoThumbnail videoFileUri={recordedVideo.videoFile.path} />
          </View>
          <Spacer vw={5} />
          <View style={styles.videoInfoContainer}>
            <View style={styles.sideBySideVideoInfoRow}>
              <Text color="secondary">Identity</Text>
              <Text weight="bold">{id}</Text>
            </View>
            <Spacer vh={1} />
            <View style={styles.sideBySideVideoInfoRow}>
              <Text color="secondary">Duration</Text>
              <Text weight="bold">{props.recordedVideo.videoFile.duration}s</Text>
            </View>
            <Spacer vh={1} />
            <View style={styles.sideBySideVideoInfoRow}>
              <Text color="secondary">Size</Text>
              <Text weight="bold">{props.recordedVideo.videoFile.duration}s</Text>
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
