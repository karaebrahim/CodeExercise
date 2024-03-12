import React from 'react';
import styled from 'styled-components';
import RadioField from './RadioField';

const Container = styled.div`
	display: flex;
`;

const Type = ({ type, setType }) => {
  return (
		<Container>
			<RadioField type='movie' value={type} setType={setType} />
			<RadioField type='book' value={type} setType={setType} />
		</Container>
  )
};

export default Type;
