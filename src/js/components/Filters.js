import React from 'react';
import styled from 'styled-components';
import Dropdown from './Dropdown';
import Clear from './Clear';
import Type from './Type';
import Search from './Search';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid lightgray;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &.even {
    align-items: flex-end;
  }
`;

export default Filters = () => {
  return (
    <Container>
      <Wrapper className="odd">
        <Dropdown />
        <Type />
      </Wrapper>
      <Wrapper className="even">
        <Search />
        <Clear />
      </Wrapper>
    </Container>
  )
};
