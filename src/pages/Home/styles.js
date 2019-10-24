import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
`;

export const BackgroundImage = styled.img`
  position: fixed; 
	right: 0; 
	bottom: 0;
	min-width: 100%; 
	min-height: 100%;
	width: 100%; 
	height: auto; 
	z-index: -1000;
	background-size: cover; 
`;

export const MessageContainer = styled.div`
	margin-top: 20vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const Title = styled.h1`
	font-size: 48px;
	color: #FFF;
`;

export const SubTitle = styled.h2`
  font-size: 28px;
  color: #FFF;
`;