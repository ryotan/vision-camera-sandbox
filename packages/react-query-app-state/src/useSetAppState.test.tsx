import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {renderHook, waitFor} from '@testing-library/react-native';
import type {PropsWithChildren} from 'react';

import {useAppState} from './useAppState';
import {useSetAppState} from './useSetAppState';

// FIXME: `waitFor` does not work with `renderHook`
//   cf:) https://github.com/callstack/react-native-testing-library/issues/1030
// eslint-disable-next-line jest/no-disabled-tests
describe.skip('useSetAppState', () => {
  it('should set app state', async () => {
    const wrapper = createWrapper();
    const {result: appStateResultForInitialKey} = renderHook(() => useAppState([{key: 'initialKey'}]), {
      wrapper,
    });
    const {result: appStateResultForUpdatedKey} = renderHook(() => useAppState([{key: 'updatedKey'}]), {
      wrapper,
    });

    // Render useSetAppState hook with initial key
    const {result: sut, rerender} = renderHook(({param}: {param: {key: string}}) => useSetAppState([param]), {
      wrapper,
      initialProps: {param: {key: 'initialKey'}},
    });
    const initial = sut.current;
    expect(initial).toBeDefined();

    // Calling sut.current with new value should update app state
    sut.current('new value for initial key');
    await waitFor(() => {
      expect(appStateResultForInitialKey.current[0]).toBe('new value for initial key');
      expect(appStateResultForUpdatedKey.current[0]).toBe(undefined);
    });

    // Rerender with the key of same value and different reference
    rerender({param: {key: 'initialKey'}});
    // Setter function should not be changed
    expect(sut.current).toBe(initial);

    // Calling sut.current with new value should update app state
    sut.current('new new value for initial key');
    await waitFor(() => {
      expect(appStateResultForInitialKey.current[0]).toBe('new new value for initial key');
      expect(appStateResultForUpdatedKey.current[0]).toBe(undefined);
    });

    // Rerender with the key of different value and different reference
    rerender({param: {key: 'updatedKey'}});
    // Setter function should be changed
    expect(sut.current).not.toBe(initial);

    // Calling sut.current with new value should update app state od updated key
    sut.current('new value for updated key');
    await waitFor(() => {
      expect(appStateResultForInitialKey.current[0]).toBe('new new value for initial key');
      expect(appStateResultForUpdatedKey.current[0]).toBe('new value for updated key');
    });
  });
});

const createWrapper = () => {
  const queryClient = new QueryClient();
  return ({children}: PropsWithChildren<void>) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
