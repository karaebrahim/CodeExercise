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

const Filters = ({ year, setYear, genre, setGenre, clearFilters, type, setType }) => {
  return (
    <Container>
      <Wrapper className="odd">
        <Dropdown year={year} genre={genre} setYear={setYear} setGenre={setGenre} />
        <Type type={type} setType={setType} />
      </Wrapper>
      <Wrapper className="even">
        <Search />
        <Clear clearFilters={clearFilters} />
      </Wrapper>
    </Container>
  )
};

export default Filters;
