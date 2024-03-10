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

export default Type = () => {
  return (
		<Container>
			<Wrapper className="odd">
				<Input
					type="radio"
					name="movie-radio"
					id="movie-radio"
					value="movie-radio"
				/>
				<label htmlFor="movie-radio">
					Movies
				</label>
			</Wrapper>
			<Wrapper className="even">
				<Input
					type="radio"
					name="book-radio"
					id="book-radio"
					value="book-radio"
				/>
				<label htmlFor="book-radio">
					Books
				</label>
			</Wrapper>
		</Container>
  )
};
