import type {QueryKey} from '@tanstack/react-query';
import {hashQueryKey, useQuery, useQueryClient} from '@tanstack/react-query';
import {useCallback, useMemo, useRef} from 'react';

export type AppStateKey = string | number | QueryKey;
export type InitialAppState<S> = S | (() => S);
export interface AppStateOptions<S, V> {
  cacheTime?: number;
  select?: (data: S) => V;
}
export interface SetAppStateFunction<S> {
  (prevState: S | undefined): S;
}
export interface SetAppState<S> {
  (value: S | SetAppStateFunction<S>): void;
}
export interface RemoveAppState {
  (): void;
}
export type AppStateAndSetAppState<S, V> = [V, SetAppState<S>, RemoveAppState];

export function useAppState<S = undefined, V = S>(
  key: AppStateKey,
  options?: AppStateOptions<S, V>,
): AppStateAndSetAppState<S | undefined, V | undefined>;
export function useAppState<S, V = S>(
  key: AppStateKey,
  initialState: InitialAppState<S>,
  options?: AppStateOptions<S, V>,
): AppStateAndSetAppState<S, V>;
export function useAppState<S, V = S>(
  key: AppStateKey,
  initialState?: InitialAppState<S | undefined>,
  options: AppStateOptions<S | null, V | null> = {cacheTime: Infinity},
): AppStateAndSetAppState<S | undefined, V | undefined> {
  const queryKey = useStableQueryKey(key);
  const {data, remove} = useQuery<S | null, unknown, V | null>(queryKey, {
    enabled: false,
    initialData: initialState,
    ...options,
  });
  const state = data === null ? undefined : data;
  const setState = useSetAppStateFunction<S | undefined>(queryKey);

  return [state, setState, remove];
}

export function useStableQueryKey(key: AppStateKey): QueryKey {
  const queryKeyRef = useRef<QueryKey>();
  const queryKeyHashRef = useRef<string>();
  return useMemo(() => {
    const newQueryKey = ensureArrayKey(key);
    const newQueryKeyHash = hashQueryKey(newQueryKey);
    // if queryKeyHash has not changed and the current queryKey is defined, return the current queryKey
    if (newQueryKeyHash === queryKeyHashRef.current && queryKeyRef.current != null) {
      return queryKeyRef.current;
    }

    // if queryKeyHash has changed, we need to update the current queryKey and hash and return it
    queryKeyRef.current = newQueryKey;
    queryKeyHashRef.current = newQueryKeyHash;
    return newQueryKey;
  }, [key]);
}

export function useSetAppStateFunction<S>(queryKey: QueryKey): SetAppState<S> {
  const queryClient = useQueryClient();
  return useCallback(
    (value: S | SetAppStateFunction<S>) => {
      const newValue = isSetAppStateFunction(value) ? value(queryClient.getQueryData(queryKey)) : value;
      queryClient.setQueryData<S | null>(queryKey, newValue === undefined ? null : newValue);
    },
    [queryClient, queryKey],
  );
}

function isSetAppStateFunction<S>(arg: S | SetAppStateFunction<S>): arg is SetAppStateFunction<S> {
  return typeof arg === 'function';
}

function ensureArrayKey(key: AppStateKey): unknown[] {
  return Array.isArray(key) ? key : [key];
}
