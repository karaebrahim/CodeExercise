import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 1rem;
`;

const Card = styled.div`
  display: flex;
  width: 25%;
  flex-grow: 1;
  flex-direction: column;
  margin-bottom: 1rem;

  img {
    height: 100%;
    object-fit: cover;
  }
`;

const Title = styled.h2`
  margin: 1rem 0;
  font-size: 1.25rem;
`;

const Para = styled.p`
  margin: 0;
`;

export default Media = () => {
  const [media, setMedia] = useState([]);
  useEffect(() => {
    const abortController = new AbortController()
    fetch('http://localhost:3001/api/media', {signal: abortController.signal})
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMedia(data);
      }).catch(err=>console.log(err))
      return ()=>{abortController.abort() }
  }, []);
  return (
    <Wrapper>
      {media.map((medium, i) => (
        <Card key={i}>
          <LazyLoadImage src={medium.poster} alt={medium.title} />
          <Title>{medium.title} {medium.year && <span>({medium.year})</span>}</Title>
          <Para>Genres: {medium.genre}</Para>
        </Card>
      ))}
    </Wrapper>
  );
};
