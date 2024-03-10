import React, { useState } from 'react';
import styled from 'styled-components';
import useMedia from '../hooks/useMedia';
import Loader from './Loader';
import Card from './Card';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem;
`;

export default Media = () => {
	const [year, setYear] = useState();
  const { isPending, error, data } = useMedia(year);

  if (isPending) return <Loader />;
  if (error) return 'An error has occurred: ' + error.message;

  return (
    <>
      <select onChange={(event) => setYear(parseInt(event.target.value))} name="year-select" id="year-select" defaultValue={year}>
        <option disabled="" hidden="" value="">Year</option>
        {data.map((medium, i) => (
          <option key={i} value={i + 1}>{medium.year}</option>
        ))}
      </select>
      <Wrapper>
        {data.map((medium, i) => (
          <Card key={i} data={medium} />
        ))}
      </Wrapper>
    </>
  )
};
