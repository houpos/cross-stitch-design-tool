'use client';
import { ButtonColorProps } from '@/app/styles/types';
import { ButtonWithText } from '../../styles/buttons';

type ButtonProps = {
	title: string;
	type: 'button' | 'submit' | 'reset';
	colors: ButtonColorProps;
	handleClick: () => void;
};

export default function Button({
	title,
	type,
	colors,
	handleClick,
}: ButtonProps) {
	return (
		<ButtonWithText
			colors={colors}
			type={type}
			onClick={() => handleClick()}>
			<span>{title}</span>
		</ButtonWithText>
	);
}
