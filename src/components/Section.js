import React from 'react';
import styled from 'styled-components';

function Section({
	title,
	description,
	leftBtnTxt,
	rightBtnTxt,
	backgroundImg,
}) {
	return (
		<Wrap bgImg={backgroundImg}>
			<ItemText>
				<h1> {title} </h1> <p> {description} </p>
			</ItemText>
			<BtnContainer>
				<BtnGroup>
					<LeftBtn blackBtn={rightBtnTxt}> {leftBtnTxt} </LeftBtn>
					{rightBtnTxt && <RightBtn> {rightBtnTxt} </RightBtn>}
				</BtnGroup>
				<DownArrow src='/images/down-arrow.svg' />
			</BtnContainer>
		</Wrap>
	);
}

export default Section;

const Wrap = styled.div`
	width: 100vw;
	height: 100vh;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	background-image: ${(props) => `url("images/${props.bgImg}")`};
`;

const ItemText = styled.div`
	padding-top: 15vh;
	text-align: center;
`;

const BtnGroup = styled.div`
	display: flex;
	margin-bottom: 40px;
	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

const LeftBtn = styled.div`
	background-color: ${(props) =>
		props.blackBtn ? 'rgba(23, 26, 32, 0.8)' : 'black'};
	height: 45px;
	width: 280px;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50px;
	opacity: 0.85;
	text-transform: uppercase;
	letter-spacing: 2px;
	font-size: 12px;
	cursor: pointer;
	margin: 10px;
`;

const RightBtn = styled(LeftBtn)`
	background-color: white;
	color: black;
	opacity: 0.75;
`;

const DownArrow = styled.img`
	height: 40px;
	margin-bottom: 10px;
	animation: animateDown infinite 2s;
	overflow-x: hidden;
`;

const BtnContainer = styled.div``;
