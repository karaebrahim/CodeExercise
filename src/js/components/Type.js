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
	height: 1.5rem;
	width: 1.5rem;
	margin-right: 0.5rem;
`;

export default Type = () => {
  return (
		<Container>
			<Wrapper className="odd">
				<Input
					type="checkbox"
					name="movie-checkbox"
					id="movie-checkbox"
					value="movie-checkbox"
					checked
				/>
				<label for="movie-checkbox">
					Movies
				</label>
			</Wrapper>
			<Wrapper className="even">
				<Input
					type="checkbox"
					name="book-checkbox"
					id="book-checkbox"
					value="book-checkbox"
					checked
				/>
				<label for="book-checkbox">
					Books
				</label>
			</Wrapper>
		</Container>
  )
};
