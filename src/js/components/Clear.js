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

export default Clear = () => {
  return (
    <div>
      <Button>Clear Filters</Button>
    </div>
  )
};
