import React from 'react';
import styled from 'styled-components';
import useYears from '../hooks/useYears';
import useGenres from '../hooks/useGenres';
import SelectField from './SelectField';

const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
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
