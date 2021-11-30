import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

function Header() {
	const [modalMenu, setModalMenu] = useState(false);

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
				<CustomMenu onClick={() => setModalMenu(true)} />
			</RightMenu>
			<BurgerMenu show={modalMenu}>
				<CustomClose />
				<li>
					<a href='/'>Existing Inventory</a>
				</li>
				<li>
					<a href='/'>Used Inventory</a>
				</li>
				<li>
					<a href='/'>Trade-in</a>
				</li>
				<li>
					<a href='/'>Test Drive</a>
				</li>
				<li>
					<a href='/'>Cybertruck</a>
				</li>
				<li>
					<a href='/'>Roadster</a>
				</li>
				<li>
					<a href='/'>Semi</a>
				</li>
				<li>
					<a href='/'>Charging</a>
				</li>
				<li>
					<a href='/'>Powerwall</a>
				</li>
				<li>
					<a href='/'>Commercial Energy</a>
				</li>
				<li>
					<a href='/'>Utilities</a>
				</li>
				<li>
					<a href='/'>Find Us</a>
				</li>
				<li>
					<a href='/'>Support</a>
				</li>
			</BurgerMenu>
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
	justify-content: space-between;
	/* top: 0;
	left: 0;
	right: 0; */
	width: 100%;
	z-index: 1;
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

	@media (max-width: 850px) {
		display: none;
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

const BurgerMenu = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	right: 0;
	background-color: #fff;
	width: 280px;
	list-style: none;
	padding: 20px;
	display: flex;
	flex-direction: column;
	text-align: start;
	transform: ${(props) => (props.show ? 'translateX(0)' : 'translateX(100%)')}
		li {
		font-size: 14.5px;
		padding: 15px 0;
	}

	a {
		padding: 8px 10px;
		color: #0a0a0aa7;
	}

	a:hover {
		background: rgba(145, 143, 143, 0.15);
		border-radius: 8px;
		transition: 0.5;
		color: #0a0a0a;
	}
`;

const CustomClose = styled(CloseIcon)`
	align-self: flex-end;
	cursor: pointer;
	color: #0a0a0aa7;

	:hover {
		color: #0a0a0a;
	}
`;
