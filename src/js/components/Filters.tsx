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

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &.even {
    margin-top: 1rem;

    @media (min-width: 600px) {
      align-items: flex-end;
      margin-top: 0;
    }
  }

  @media (min-width: 600px) {
    width: 50%;
  }
`;

const Filters = () => {
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

export default Filters;
