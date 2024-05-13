'use client';
import { ButtonColorProps } from '@/app/styles/types';
import { ButtonWithText } from '../../styles/buttons';

type ButtonProps = {
	title: string;
	type?: 'submit' | 'reset';
	colors?: ButtonColorProps | undefined;
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
			type={type || 'button'}
			onClick={() => handleClick()}>
			<span>{title}</span>
		</ButtonWithText>
	);
}
