import type {EventListenerCallback, EventMapBase} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';

export const useBeforeRemoveListener = (onBeforeRemove: EventListenerCallback<EventMapBase, 'beforeRemove'>) => {
  const navigation = useNavigation();
  useEffect(() => {
    return navigation.addListener('beforeRemove', onBeforeRemove);
  }, [navigation, onBeforeRemove]);
};
