import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	position: relative;
`;

const Input = styled.input`
	border: 1px solid lightgray;
	height: 2rem;
	width: 15rem;
	padding: 0.5rem 2rem 0.5rem 0.5rem;
`;

const Icon = styled.span`
	position: absolute;
	right: 0.5rem;
	top: 0.25rem;
	color: lightgray;
`;

export default Search = () => {
  return (
		<Wrapper>
			<label for="app-search" className="visually-hidden">Search the app:</label>
			<Input type="search" id="app-search" placeholder="" value="" />
			<Icon className="material-symbols-outlined">search</Icon>
		</Wrapper>
  )
};
