import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import Card from './Card';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem;
`;

export default Media = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ['media'],
    queryFn: () =>
      fetch('http://localhost:3001/api/media')
        .then((res) =>
          res.json(),
        )
        .catch(err => console.log(err)),
  });

  if (isPending) return 'Loading...'; // TODO: create Loading component
  if (error) return 'An error has occurred: ' + error.message;

  return (
    <Wrapper>
      {data.map((medium, i) => (
        <Card key={i} data={medium} />
      ))}
    </Wrapper>
  )
};
