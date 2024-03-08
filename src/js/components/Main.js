import React from 'react';
import styled from 'styled-components';
import Filters from './Filters';

const Container = styled.div`
  display: flex;
  border: 1px solid black;
`;

export default Main = () => {
  return (
    <Container>
      <Filters />
    </Container>
  )
};
