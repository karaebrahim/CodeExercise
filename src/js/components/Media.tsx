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

const ButtonContainer = styled.div`
  margin: 1rem;
  text-align: center;
`;

const Media = () => {
  const pageSize = 9;
	const [page, setPage] = useState(1);
  const { isLoading, error, data } = useMedia({ page, pageSize });

  if (isLoading) return <Loader />;
  if (error) return `An error has occurred: ${error.message}`;

  return (
    <>
      <Wrapper>
        {data?.map((medium, i) => (
          <Card key={i} data={medium} />
        ))}
      </Wrapper>
      <ButtonContainer>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>Previous</button>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </ButtonContainer>
    </>
  )
};

export default Media;
