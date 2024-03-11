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

const Dropdown = () => {
	const [year, setYear] = useState();
  return (
    <div>
			<Container>
				<Label htmlFor="genre-select">
				<SelectWrapper>
					<select onChange={(event) => setYear(parseInt(event.target.value))} name="year-select" id="year-select" defaultValue={year}>
						{/* <option disabled="" hidden="" value="">Year</option>
						 {data.map((medium, i) => (
							<option key={i} value={i + 1}>{medium.year}</option>
						))} */}
					</select>

					<Icon className="material-symbols-outlined">arrow_drop_down</Icon>
				</SelectWrapper>
				</Label>
			</Container>
    </div>
  )
};

export default Dropdown;
