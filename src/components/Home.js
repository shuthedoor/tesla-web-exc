import React from 'react';
import styled from 'styled-components';
import Section from './Section';

function Home() {
	return (
		<Container>
			<Section
				title='Model S'
				description='Order Online for Touchless Delivery'
				backgroundImg='model-s.jpg'
				leftBtnTxt='custom order'
				rightBtnTxt='existing inventory'
			/>
			<Section
				title='Model Y'
				description='Order Online for Touchless Delivery'
				backgroundImg='model-y.jpg'
				leftBtnTxt='custom order'
				rightBtnTxt='existing inventory'
			/>
			<Section
				title='Model 3'
				description='Order Online for Touchless Delivery'
				backgroundImg='model-3.jpg'
				leftBtnTxt='custom order'
				rightBtnTxt='existing inventory'
			/>
			<Section
				title='Model X'
				description='Order Online for Touchless Delivery'
				backgroundImg='model-x.jpg'
				leftBtnTxt='custom order'
				rightBtnTxt='existing inventory'
			/>
			<Section
				title='Solar Panels'
				description='Lowest Cost Solar Panels in America'
				backgroundImg='solar-panel.jpg'
				leftBtnTxt='order now'
				rightBtnTxt='learn more'
			/>
			<Section
				title='Solar Roofs'
				description='Produce Clean Energy From Your Roof'
				backgroundImg='solar-roof.jpg'
				leftBtnTxt='order now'
				rightBtnTxt='learn more'
			/>
			<Section
				title='Accessories'
				description=''
				backgroundImg='accessories.jpg'
				leftBtnTxt='shop now'
				rightBtnTxt=''
			/>
		</Container>
	);
}

export default Home;

const Container = styled.div`
	height: 100vh;
`;
