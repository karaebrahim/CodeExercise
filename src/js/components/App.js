import React from 'react';
import styled from 'styled-components';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import Filters from './Filters';
import Media from './Media';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1080px;
  border: 1px solid lightgray;
`; // TODO: Create color theme

const queryClient = new QueryClient()

export default App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Wrapper>
        <Filters />
        <Media />
      </Wrapper>
    </QueryClientProvider>
  )
}
