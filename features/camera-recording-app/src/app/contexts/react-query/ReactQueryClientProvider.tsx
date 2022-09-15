import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import type {FunctionComponent, PropsWithChildren} from 'react';

export const ReactQueryClientProvider: FunctionComponent<PropsWithChildren> = ({children}) => {
  const client = new QueryClient();
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};
