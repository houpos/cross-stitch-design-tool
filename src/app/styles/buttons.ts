import styled from 'styled-components';
import { ButtonColorProps } from './types';

export const ButtonWithText = styled.button`
	font-size: ${(props) => props.theme.fonts.buttons.primary.fontSize};
	border: none;
	border-radius: 5px;
	color: ${(props) => props.theme.colors.buttons.primary.text};
	background: ${(props) => props.theme.colors.buttons.primary.default};
	padding: 9px;

	margin-right: 15px;
	cursor: grab;

	&:hover {
		background: ${(props) => props.theme.colors.buttons.primary.active};
	}
`;

export const RoundButton = styled(ButtonWithText)<{
	buttonColors: ButtonColorProps;
}>`
	font-size: 34px;
	color: ${(props) => props.buttonColors.text};
	background: ${(props) => props.buttonColors.default};
	padding: 0px;
	border-radius: 100%;
	width: 45px;
	height: 45px;
	display: inline-flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	&:hover {
		background-color: ${(props) => props.buttonColors.active};
	}
`;
