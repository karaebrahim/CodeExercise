import React from 'react';
import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-grow: 1;
  flex-direction: column;
  margin-bottom: 1rem;

  img {
		width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (min-width: 600px) {
    width: 48%;
  }

  @media (min-width: 1080px) {
    width: 25%;
  }
`;

const Title = styled.h2`
  margin: 1rem 0;
  font-size: 1.25rem;
`;

const Para = styled.p`
  margin: 0;
`;

const addDefaultSrc = (event) => {
  event.target.src = 'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg';
}

export default Card = ({ data }) => {
  return (
    <Wrapper>
      <LazyLoadImage src={data.poster} alt={data.title} width='340' height='510' onError={addDefaultSrc} />
			<Title>{data.title} {data.year && <span>({data.year})</span>}</Title>
			{data.genre &&
				<Para>
					<b>Genres: </b>
					{data.genre
						.map(a => a.charAt(0).toUpperCase() + a.substr(1))
						.join(', ')
					}
				</Para>
			}
    </Wrapper>
  )
};
