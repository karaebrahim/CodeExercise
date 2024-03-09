import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Card from './Card';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem;
`;

export default Media = () => {
  const [media, setMedia] = useState([]);
  useEffect(() => {
    const abortController = new AbortController()
    fetch('http://localhost:3001/api/media', { signal: abortController.signal })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMedia(data);
      }).catch(err => console.log(err))
      return () => { abortController.abort() }
  }, []);
  return (
    <Wrapper>
      {media.map((medium, i) => (
        <Card key={i} data={medium} />
      ))}
    </Wrapper>
  );
};
