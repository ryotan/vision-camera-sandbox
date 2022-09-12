import {useEffect, useRef} from 'react';

export const usePrevious = <T>(current: T) => {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = current;
  });

  return ref.current;
};
