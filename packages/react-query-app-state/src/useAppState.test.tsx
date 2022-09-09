import {nop} from '@ryotan-vision-camera-sandbox/type-util';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {renderHook, waitFor} from '@testing-library/react-native';
import type {PropsWithChildren} from 'react';
import React from 'react';
import type {TypeEqual} from 'ts-expect';
import {expectType} from 'ts-expect';

import {useAppState} from './useAppState';

// FIXME: `waitFor` does not work with `renderHook`
//   cf:) https://github.com/callstack/react-native-testing-library/issues/1030
// eslint-disable-next-line jest/no-disabled-tests
describe.skip('useAppState', () => {
  describe('without initial value', () => {
    describe('correctly declares the type of state/setState', () => {
      test('Without type parameter', () => {
        const {result} = renderHookWithProvider(() => useAppState('key'));
        const [state, setState] = result.current;
        expect(state).toBeUndefined();

        // the type of `state` must be `undefined`
        expectType<TypeEqual<typeof state, undefined>>(true);
        // `setState` accepts `undefined`
        nop(() => setState(undefined));
        // `setState` accepts a function that returns `undefined`
        nop(() => setState(() => undefined));
        // @ts-expect-error - `setState` accepts no value other than `undefined`
        nop(() => setState(getOptionalString()));
        // @ts-expect-error - `setState` does not accept functions that return anything other than `undefined`
        nop(() => setState(getOptionalString));
      });
      test('With type parameter', async () => {
        const {result} = renderHookWithProvider(() => useAppState<'123' | '456'>('key'));
        const [state, setState] = result.current;
        expect(state).toBeUndefined();

        // the type of `state` must be `<type parameter> | undefined`
        expectType<TypeEqual<typeof state, '123' | '456' | undefined>>(true);
        // `setState` accepts a value of type `<type parameter> | undefined`
        setState('456');
        await waitFor(() => expect(['123', '456']).toContain(result.current[0]));
        // `setState` accepts a function that returns a value of type `<type parameter> | undefined`
        // https://github.com/TanStack/query/issues/2925
        setState(undefined);
        // rerender({});
        await waitFor(() => expect(result.current[0]).toBeUndefined());

        // @ts-expect-error - `setState` does not accept values that are not of type `<type parameter> | undefined`
        nop(() => setState(getOptionalString()));
        // @ts-expect-error - `setState` does not accept functions that return values of types other than `<type parameter> | undefined`
        nop(() => setState(getOptionalNumber));
      });
    });
  });
  describe('with definite initial value', () => {
    describe('correctly declares the type of state/setState', () => {
      test('Without type parameter', async () => {
        const {result} = renderHookWithProvider(() => useAppState('key', 'initial state'));
        const [state, setState] = result.current;
        expect(state).toBe('initial state');

        // the type of `state` must be `string`
        expectType<TypeEqual<typeof state, string>>(true);
        // `setState` accepts `string`
        setState('2nd state');
        await waitFor(() => expect(result.current[0]).toBe('2nd state'));
        // @ts-expect-error - `setState` accepts no value other than `string`
        nop(() => setState(getOptionalString()));
        // @ts-expect-error - `setState` does not accept functions that return anything other than `string`
        nop(() => setState(getOptionalString));
      });
      test('With type parameter', async () => {
        const {result} = renderHookWithProvider(() => useAppState<'123' | '456' | undefined>('key', '123'));
        const [state, setState] = result.current;
        expect(state).toBe('123');

        // the type of `state` must be the same as type parameter
        expectType<TypeEqual<typeof state, '123' | '456' | undefined>>(true);
        // `setState` accepts `456`
        setState('456');
        await waitFor(() => expect(result.current[0]).toBe('456'));
        // `setState` accepts a function that returns `undefined`
        setState(getUndefined);
        await waitFor(() => expect(result.current[0]).toBeUndefined());
        // @ts-expect-error - `setState` accepts no value other than `123`, `456` or `undefined`
        nop(() => setState(getOptionalString()));
        // @ts-expect-error - `setState` does not accept functions that return anything other than `123`, `456` or `undefined`
        nop(() => setState(getOptionalNumber));
      });
    });
  });
  describe('with optional initial value', () => {
    describe('correctly declares the type of state/setState', () => {
      test('Without type parameter', async () => {
        const initialState = getOptionalNumber();
        const {result} = renderHookWithProvider(() => useAppState('key', initialState));
        const [state, setState] = result.current;
        expect(state).toBe(initialState);

        // the type of `state` must be the same as type parameter
        expectType<TypeEqual<typeof state, number | undefined>>(true);
        // `setState` accepts `number`
        setState(1234);
        await waitFor(() => expect(result.current[0]).toBe(1234));
        // `setState` accepts a function that returns `undefined`
        setState(getUndefined);
        await waitFor(() => expect(result.current[0]).toBeUndefined());
        // @ts-expect-error - `setState` accepts no value other than `number` or `undefined`
        nop(() => setState(getOptionalString()));
        // @ts-expect-error - `setState` does not accept functions that return anything other than `number` or `undefined`
        nop(() => setState(getUnionTypeString));
      });
      test('With type parameter', async () => {
        const initialState = getOptionalNumber();
        const {result} = renderHookWithProvider(() => useAppState<number | string | undefined>('key', initialState));
        const [state, setState] = result.current;
        expect(state).toBe(initialState);

        // the type of `state` must be the same as type parameter
        expectType<TypeEqual<typeof state, string | number | undefined>>(true);
        // `setState` accepts `number`
        setState('next state');
        await waitFor(() => expect(result.current[0]).toBe('next state'));
        // `setState` accepts a function that returns `undefined`
        setState(getUndefined);
        await waitFor(() => expect(result.current[0]).toBeUndefined());
        // @ts-expect-error - `setState` accepts no value other than `number`, `string` or `undefined`
        nop(() => setState({}));
        // @ts-expect-error - `setState` does not accept functions that return anything other than `number`, `state` or `undefined`
        nop(() => setState(() => {}));
      });
    });
  });
  describe('with function returning definite initial value', () => {
    describe('correctly declares the type of state/setState', () => {
      test('Without type parameter', () => {
        const {result} = renderHookWithProvider(() => useAppState('key', () => 'initial state'));
        const [state] = result.current;
        expect(state).toBe('initial state');
        // the type of `state` must be `string`
        expectType<TypeEqual<typeof state, string>>(true);
      });
      test('With type parameter', () => {
        const {result} = renderHookWithProvider(() => useAppState<'123' | '456'>('key', getUnionTypeString));
        const [state] = result.current;
        expect(['123', '456', undefined]).toContain(state);
        // the type of `state` must be the same as type parameter
        expectType<TypeEqual<typeof state, '123' | '456'>>(true);
      });
    });
  });
  describe('with function returning optional initial value', () => {
    describe('correctly declares the type of state/setState', () => {
      test('Without type parameter', () => {
        const {result} = renderHookWithProvider(() => useAppState('key', getOptionalString));
        const [state] = result.current;
        expect(['string', 'undefined']).toContain(typeof state);
        // the type of `state` must be `string`
        expectType<TypeEqual<typeof state, string | undefined>>(true);
      });
      test('With type parameter', () => {
        const {result} = renderHookWithProvider(() =>
          useAppState<'123' | '456' | undefined>('key', getOptionalUnionTypeString),
        );
        const [state] = result.current;
        expect(['123', '456', undefined]).toContain(state);
        // the type of `state` must be the same as type parameter
        expectType<TypeEqual<typeof state, '123' | '456' | undefined>>(true);
      });
    });
  });

  test('preserves state after unmount', async () => {
    const wrapper = createWrapper();

    const initialState = 'initial state';
    const {result, rerender, unmount} = renderHook(() => useAppState('key', initialState), {wrapper});
    const [state, setState] = result.current;
    expect(state).toBe(initialState);

    const updatedState = 'updated state';
    setState(updatedState);
    await waitFor(() => {
      expect(result.current[0]).toBe(updatedState);
    });

    rerender({});
    expect(result.current[0]).toBe(updatedState);

    unmount();

    const {result: other} = renderHook(() => useAppState('key'), {wrapper});
    expect(other.current[0]).toBe(updatedState);
  });

  test('preserves state after query key is changed', () => {
    const wrapper = createWrapper();
    const initialState = {state: 'initial state'};
    const {result, rerender} = renderHook(({param}: {param: {state: string}}) => useAppState(['key', param], param), {
      wrapper,
      initialProps: {param: initialState},
    });
    expect(result.current[0]).toBe(initialState);

    // Rerender with the query key of the same value but different reference
    rerender({param: {state: 'initial state'}});
    expect(result.current[0]).toBe(initialState);

    // Rerender with the query key of the different value and different reference
    const updatedState = {state: 'updated state'};
    rerender({param: updatedState});
    expect(result.current[0]).toBe(updatedState);
  });

  // FIXME: This test is failing because react-query cache time seems to be not working with jest fake timers...
  // eslint-disable-next-line jest/no-disabled-tests
  test.skip('discards state after specified cache time has elapsed', async () => {
    const initialState = {state: 'initial state'};
    const {result, rerender} = renderHookWithProvider(() => useAppState(['key'], initialState, {cacheTime: 2}));
    expect(result.current[0]).toBe(initialState);

    // Update state to a different value
    const updatedState = {state: 'updated state'};
    result.current[1](updatedState);
    await waitFor(() => {
      expect(result.current[0]).toEqual(updatedState);
    });

    // Advance timer with a delay of 3ms
    jest.advanceTimersByTime(2);

    // After rerender, state should be reset to initial value
    rerender({});
    await waitFor(() => {
      expect(result.current[0]).toBe(initialState);
    });
  });
});

const getOptionalNumber = () => {
  const random = Math.random();
  return random < 0.5 ? undefined : random;
};
const getUndefined = () => undefined;
const getUnionTypeString = () => {
  const random = Math.random();
  return random < 0.5 ? '123' : '456';
};
const getOptionalUnionTypeString = () => {
  const random = Math.random();
  return random < 0.5 ? '123' : random < 0.75 ? '456' : undefined;
};
const getOptionalString = () => {
  const random = Math.random();
  return random < 0.5 ? undefined : String(random);
};

const createWrapper = () => {
  const queryClient = new QueryClient();
  return ({children}: PropsWithChildren<void>) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
const renderHookWithProvider = <Result,>(callback: () => Result) => renderHook(callback, {wrapper: createWrapper()});
