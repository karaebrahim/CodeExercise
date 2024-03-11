import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
	text-transform: uppercase;
	text-decoration: underline;
	background: none;
	border: none;

	&:hover {
		cursor: pointer;
		color: blue;
	}
`;

const Clear = () => {
  return (
    <div>
      <Button>Clear Filters</Button>
    </div>
  )
};

export default Clear;
