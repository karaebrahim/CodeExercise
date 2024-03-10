import React from 'react';
import styled from 'styled-components';
import Loader from './Loader';

const Wrapper = styled.div`
  text-align: center;
  padding: 1rem;
`;

export default Loader = () => {
  return (
    <Wrapper>
      <div>Loading...</div>
    </Wrapper>
  )
};
