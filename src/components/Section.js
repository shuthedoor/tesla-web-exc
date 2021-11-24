import React from 'react';
import styled from 'styled-components';

function Section() {
	return <Wrap></Wrap>;
}

export default Section;

const Wrap = styled.div`
	width: 100vw;
	height: 100vh;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	background-image: url(/images/model-s.jpg);
`;
