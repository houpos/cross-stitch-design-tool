import styled from 'styled-components';
import { ButtonColorProps } from './types';

export const ButtonWithText = styled.button<{
	colors?: ButtonColorProps | undefined;
}>`
	font-size: ${(props) => props.theme.fonts.buttons.primary.fontSize};
	border: none;
	border-radius: 5px;
	color: ${(props) =>
		props?.colors?.text || props.theme.colors.buttons.primary.text};
	background: ${(props) =>
		props?.colors?.default || props.theme.colors.buttons.primary.default};
	padding: 9px;

	margin-right: 15px;
	cursor: grab;

	&:hover {
		background: ${(props) =>
			props?.colors?.active || props.theme.colors.buttons.primary.active};
	}
`;

export const RoundButton = styled(ButtonWithText)`
	font-size: 34px;
	padding: 0px;
	border-radius: 100%;
	width: 45px;
	height: 45px;
	display: inline-flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const RoundCancelButton = styled(RoundButton)`
	color: ${(props) => props.theme.colors.buttons.cancel.text};
	background: ${(props) => props.theme.colors.buttons.cancel.default};

	&:hover {
		background: ${(props) => props.theme.colors.buttons.cancel.active};
	}
`;
