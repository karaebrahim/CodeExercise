import React from 'react';
import styled from 'styled-components';
import useYears from '../hooks/useYears';
import useGenres from '../hooks/useGenres';
import SelectField from './SelectField';

const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const Container = styled.div`
  width: 50%;

  select {
    appearance: none;
    width: 100%;
    font-size: 1rem;
    padding: 0.5rem;
    border: 1px solid lightgray;
    border-bottom: 2px solid darkgray;
    cursor: pointer;
  }
`;

const Label = styled.label`
  position: relative;
`;

const SelectWrapper = styled.span`
  display: flex;
  align-items: center;
`;

const Icon = styled.span`
  position: absolute;
  right: 1rem;
`;

const Dropdown = ({ year, genre, setYear, setGenre }) => {
  const { data: dataYear } = useYears();
  const { data: dataGenre } = useGenres();
  return (
    <Wrapper>
      <SelectField type='year' value={year} setData={setYear} data={dataYear} />
      <SelectField type='genre' value={genre} setData={setGenre} data={dataGenre} />
    </Wrapper>
  )
};

export default Dropdown;
