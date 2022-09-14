import {useQuery} from '@tanstack/react-query';

import type {AppStateKey, AppStateOptions, InitialAppState} from './useAppState';
import {useStableQueryKey} from './useAppState';

export function useAppStateValue<S = undefined, V = S>(
  key: AppStateKey,
  options?: AppStateOptions<S, V>,
): V | undefined;
export function useAppStateValue<S, V = S>(
  key: AppStateKey,
  initialState: InitialAppState<S>,
  options?: AppStateOptions<S, V>,
): V;
export function useAppStateValue<S, V = S>(
  key: AppStateKey,
  initialState?: InitialAppState<S | undefined>,
  options: AppStateOptions<S | null, V | null> = {cacheTime: Infinity},
): V | undefined {
  const queryKey = useStableQueryKey(key);
  const {data} = useQuery<S | null, unknown, V | null>(queryKey, {
    enabled: false,
    initialData: initialState,
    ...options,
  });
  return data === null ? undefined : data;
}
