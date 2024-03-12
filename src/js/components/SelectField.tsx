import React from 'react';
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

const SelectField = ({ type, data, setData }) => {
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return (
    <Container>
      <Label htmlFor={`${type}-select`}>
      <SelectWrapper>
        <select onChange={(event) => setData(event.target.value)} name={`${type}-select`} id={`${type}-select`} value={type}>
          <option value="">{capitalize(type)}</option>
            {data?.map((entry, i) => (
            <option key={i} value={entry}>{capitalize(entry)}</option>
          )).sort()}
        </select>
        <Icon className="material-symbols-outlined">arrow_drop_down</Icon>
      </SelectWrapper>
      </Label>
    </Container>
  )
};

export default SelectField;
