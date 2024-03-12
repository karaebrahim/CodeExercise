import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	position: relative;
`;

const Input = styled.input`
	border: 1px solid lightgray;
	height: 1rem;
	width: 15rem;
	padding: 0.5rem 2rem 0.5rem 0.5rem;

	@media (max-width: 600px) {
    width: 100%;
  }
`;

const Icon = styled.span`
	position: absolute;
	right: 0.5rem;
	top: 0.25rem;
	color: lightgray;
`;

const Search = ({ searchItems }) => {
  return (
		<Wrapper>
      <Input type="text" id="app-search" aria-label="Search the app" placeholder="" onChange={(e) => searchItems(e.target.value)} />
			<Icon className="material-symbols-outlined">search</Icon>
		</Wrapper>
  )
};

export default Search;
