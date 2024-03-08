import React from 'react';
import styled from 'styled-components';
import Main from './Main';
import Media from './Media';

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 2rem;
  max-width: 1080px;
  border: 1px solid lightgray;
`;

export default App = () => {
  return (
    <Wrapper>
      <Main />
      <Media />
    </Wrapper>
  )
};
