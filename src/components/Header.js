import React from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';

function Header() {
	return (
		<Container>
			<a href='/'>
				<img src='/images/logo.svg' alt='' />
			</a>

			<Menu>
				<a href='/'>Model S</a>

				<a href='/'>Model 3</a>

				<a href='/'>Model X</a>

				<a href='/'>Model Y</a>
			</Menu>
			<RightMenu>
				<a href='/'>Shop</a>
				<a href='/'>Account</a>
				<CustomMenu />
			</RightMenu>
		</Container>
	);
}

export default Header;

const Container = styled.div`
	min-height: 50px;
	position: fixed;
	display: flex;
	align-items: center;
	padding: 0 20px;
	/* top: 0;
	left: 0;
	right: 0; */
	width: 100%;
`;
const Menu = styled.div`
	display: flex;
	align-items: center;
	flex: 1;
	justify-content: center;

	a {
		font-weight: 600;
		font-size: 15px;
		text-transform: uppercase;
		padding: 8px 12px;
		margin: 10px;
	}

	a:hover {
		background-color: rgba(255, 255, 255, 0.2);
		border-radius: 10px;
		transition: 0.5;
	}
`;

const RightMenu = styled.div`
	display: flex;
	align-items: center;
	a {
		font-weight: 600;
		font-size: 15px;
		text-transform: uppercase;
		padding: 8px 12px;
		margin: 5px;
	}

	a:hover {
		background-color: rgba(255, 255, 255, 0.2);
		border-radius: 10px;
		transition: 0.5;
	}
`;

const CustomMenu = styled(MenuIcon)`
	margin-left: 12px;
	cursor: pointer;
`;
