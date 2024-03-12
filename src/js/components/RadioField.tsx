import React from 'react';
import styled from 'styled-components';
import { capitalize } from '../utils/capitalize';

const Wrapper = styled.div`
	display: flex;
	align-items: center;

  &:first-of-type {
    margin-right: 1rem;
  }
`;

const Input = styled.input`
	height: 1rem;
	width: 1rem;
	margin-right: 0.5rem;
`;

const RadioField = ({ value, type, setType }) => {
  return (
    <Wrapper>
      <Input
        type="radio"
        name="type-radio"
        id={`${type}-radio`}
        value={`${type}`}
        checked={type == value ? true : false}
        onChange={(e) => setType(e.target.value)}
      />
      <label htmlFor={`${type}-radio`}>{capitalize(type)}</label>
    </Wrapper>
  )
};

export default RadioField;
