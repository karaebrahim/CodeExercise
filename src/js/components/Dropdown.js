import React, { useState } from 'react';
import styled from 'styled-components';

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

export default Dropdown = () => {
	const [genreId, setGenreId] = useState();
  return (
    <div>
			<Container>
				<Label htmlFor="genre-select">
				<SelectWrapper>
					<select onChange={(event) => setGenreId(event.target.value)} name="genre-select" id="genre-select" defaultValue={genreId}>
						<option disabled="" hidden="" value="">Genre</option>
						<option value="action">Action</option>
						<option value="adventure">Adventure</option>
						<option value="comedy">Comedy</option>
						<option value="crime">Crime</option>
					</select>

					<Icon className="material-symbols-outlined">arrow_drop_down</Icon>
				</SelectWrapper>
				</Label>
			</Container>
    </div>
  )
};
