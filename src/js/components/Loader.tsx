import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
  padding: 1rem;
`;

const Loader = () => { // TODO: Add a loading animation
  return (
    <Wrapper>
      <div>Loading...</div>
    </Wrapper>
  )
};

export default Loader;
