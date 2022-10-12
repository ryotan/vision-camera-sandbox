import {useFocusEffect} from '@react-navigation/native';
import {VideoThumbnail} from '@ryotan-vision-camera-sandbox/video-recording';
import {useQuery, useQueryClient} from '@tanstack/react-query';
import * as ExpoFileSystem from 'expo-file-system';
import {useCallback, useMemo} from 'react';
import {FlatList, Pressable} from 'react-native';

import type {HistoryScreenName} from '../../routes';
import {DetailScreenName} from '../../routes';
import type {HistoryStackScreenProps} from './HistoryStackScreenProps';

export const HistoryScreen = ({navigation}: HistoryStackScreenProps<typeof HistoryScreenName>) => {
  const navigateToDetail = useCallback(
    (file: string) => {
      navigation.navigate(DetailScreenName, {file});
    },
    [navigation],
  );

  const {data: savedFiles} = useQuery(['videos', 'recorded'], async () => {
    console.log('Fetching videos > recorded');
    if (ExpoFileSystem.documentDirectory) {
      const files = await ExpoFileSystem.readDirectoryAsync(ExpoFileSystem.documentDirectory);
      return await Promise.all(
        files
          .map(file => `${ExpoFileSystem.documentDirectory ?? ''}${file}`)
          .map(file => ExpoFileSystem.getInfoAsync(file)),
      );
    } else {
      return [];
    }
  });

  const queryClient = useQueryClient();
  useFocusEffect(
    useCallback(() => {
      console.log('Invalidate videos and diskspace');
      queryClient
        .invalidateQueries({
          predicate: ({queryKey}) => queryKey[0] === 'videos' || queryKey[0] === 'diskspace',
        })
        .catch(console.error);
    }, [queryClient]),
  );

  const {data: tmpFiles} = useQuery(['videos', 'temporary'], async () => {
    console.log('Fetching videos > temporary');
    if (ExpoFileSystem.cacheDirectory) {
      const files = await ExpoFileSystem.readDirectoryAsync(ExpoFileSystem.cacheDirectory);
      return await Promise.all(
        files
          .map(file => `${ExpoFileSystem.cacheDirectory ?? ''}${file}`)
          .map(file => ExpoFileSystem.getInfoAsync(file)),
      );
    } else {
      return [];
    }
  });

  const data = useMemo(() => {
    const files = [...(savedFiles ?? []), ...(tmpFiles ?? [])];
    return (files ?? [])
      .filter(f => f.uri.endsWith('mp4'))
      .sort((a, b) => {
        return (b.modificationTime ?? 0) - (a.modificationTime ?? 0);
      });
  }, [savedFiles, tmpFiles]);

  return (
    <FlatList
      data={data}
      renderItem={({item}) => {
        return (
          <Pressable style={{width: '30%', height: 80}} onPress={() => navigateToDetail(item.uri)}>
            <VideoThumbnail videoFileUri={item.uri} key={item.uri} />
          </Pressable>
        );
      }}
      keyExtractor={item => item.uri}
      getItemLayout={(data, index) => {
        return {length: 80, offset: 80 * index, index};
      }}
    />
  );

  // return (
  //   <ScrollView>
  //     <CenteredView>
  //       <Text>HistoryScreen</Text>
  //       <Text>
  //         Disk Size: {(freeDiskSize ?? 0) / 1024 / 1024}MiB / {(totalDiskSize ?? 0) / 1024 / 1024} MiB
  //       </Text>
  //       <Text>Saved Files</Text>
  //       {!isLoading && files
  //         ? files.map(file => {
  //             return (
  //               <Button onPress={() => navigateToDetail(file.uri)} key={file.uri}>
  //                 <Text>{file.uri}</Text>
  //                 <Text>{(file.size ?? 0) / 1024 / 1024}MiB</Text>
  //                 {file.modificationTime && <Text>{new Date(file.modificationTime * 1000).toISOString()}</Text>}
  //               </Button>
  //             );
  //           })
  //         : null}
  //       <Text>Temporary Files</Text>
  //       {tmpFiles
  //         ? tmpFiles.map(file => {
  //             return (
  //               <Button onPress={() => navigateToDetail(file.uri)} key={file.uri}>
  //                 <Text>{file.uri}</Text>
  //                 <Text>{(file.size ?? 0) / 1024 / 1024}MiB</Text>
  //                 {file.modificationTime && <Text>{new Date(file.modificationTime * 1000).toISOString()}</Text>}
  //               </Button>
  //             );
  //           })
  //         : null}
  //     </CenteredView>
  //   </ScrollView>
  // );
};
