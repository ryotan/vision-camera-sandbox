import type {AppStateKey} from './useAppState';
import {useSetAppStateFunction, useStableQueryKey} from './useAppState';

export function useSetAppState<S>(key: AppStateKey) {
  const queryKey = useStableQueryKey(key);
  return useSetAppStateFunction<S>(queryKey);
}
