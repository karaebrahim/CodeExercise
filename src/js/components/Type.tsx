import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
`;

const Wrapper = styled.div`
	display: flex;
	align-items: center;

	&.odd {
		margin-right: 1rem;
	}
`;

const Input = styled.input`
	height: 1rem;
	width: 1rem;
	margin-right: 0.5rem;
`;

const Type = ({ type, setType }) => {
  return (
		<Container>
			<Wrapper className="odd">
				<Input
					type="radio"
					name="type-radio"
					id="movie-radio"
					value="movie"
					checked={type == 'movie' ? true : false}
					onChange={(e) => setType(e.target.value)}
				/>
				<label htmlFor="movie-radio">
					Movies
				</label>
			</Wrapper>
			<Wrapper className="even">
				<Input
					type="radio"
					name="type-radio"
					id="book-radio"
					value="book"
					checked={type == 'book' ? true : false}
					onChange={(e) => setType(e.target.value)}
				/>
				<label htmlFor="book-radio">
					Books
				</label>
			</Wrapper>
		</Container>
  )
};

export default Type;
