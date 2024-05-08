import styled from 'styled-components';

const MainButton = styled.button`
	padding: 9px;
	background-color: ${(props) => props.theme.colors.buttons.primary.default};
	margin-right: 15px;
	border-radius: 5px;
	border: none;
	color: ${(props) => props.theme.colors.buttons.primary.text};
	font-size: ${(props) => props.theme.fonts.buttons.primary.fontSize};
	cursor: grab;

	&:hover {
		background-color: ${(props) => props.theme.colors.buttons.primary.active};
	}
`;

export default MainButton;
