import React from 'react';
import styled from 'styled-components';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Media from './Media';

const Wrapper = styled.div`
  margin: 0 1rem;
  max-width: 1080px;
  border: 1px solid lightgray;

  @media (min-width: 1100px) {
    margin: 0 auto;
  }
`; // TODO: Create color theme, add media queries

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Wrapper>
        <Media />
      </Wrapper>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App;
