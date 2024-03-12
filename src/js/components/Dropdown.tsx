import React, { useState } from 'react';
import styled from 'styled-components';
import useYears from '../hooks/useYears';
import useGenres from '../hooks/useGenres';

const Wrapper = styled.div`
	display: flex;
	gap: 1rem;
`;

const Container = styled.div`
	width: 50%;

	select {
		appearance: none;
		width: 100%;
		font-size: 1rem;
		padding: 0.5rem;
		border: 1px solid lightgray;
		border-bottom: 2px solid darkgray;
		cursor: pointer;
	}
`;

const Label = styled.label`
	position: relative;
`;

const SelectWrapper = styled.span`
	display: flex;
	align-items: center;
`;

const Icon = styled.span`
	position: absolute;
	right: 1rem;
`;

const Dropdown = ({ year, genre, setYear, setGenre }) => {
	const { data } = useYears();
	const { data: dataGenre } = useGenres();
  return (
		<Wrapper>
			<Container>
				<Label htmlFor="year-select">
				<SelectWrapper>
					<select onChange={(event) => setYear(event.target.value)} name="year-select" id="year-select" value={year}>
						<option value="">Year</option>
							{data?.map((entry, i) => (
							<option key={i} value={entry}>{entry}</option>
						)).sort()}
					</select>
					<Icon className="material-symbols-outlined">arrow_drop_down</Icon>
				</SelectWrapper>
				</Label>
			</Container>
			<Container>
				<Label htmlFor="genre-select">
				<SelectWrapper>
					<select onChange={(event) => setGenre(event.target.value)} name="genre-select" id="genre-select" value={genre}>
						<option value="">Genre</option>
							{dataGenre?.map((entry, i) => (
							<option key={i} value={entry}>{entry}</option>
						)).sort()}
					</select>
					<Icon className="material-symbols-outlined">arrow_drop_down</Icon>
				</SelectWrapper>
				</Label>
			</Container>
		</Wrapper>
  )
};

export default Dropdown;
