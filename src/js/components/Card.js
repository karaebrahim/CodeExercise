import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
`;

export default Card = (data) => {
  return (
    <Wrapper>
      <h2>{data.media.title}</h2>
    </Wrapper>
  )
};
