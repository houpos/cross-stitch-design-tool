'use client';
import { ButtonWithText } from '../../styles/buttons';

type ButtonProps = {
	title: string;
	handleClick: () => void;
};

export default function Button({ title, handleClick }: ButtonProps) {
	return (
		<ButtonWithText
			type="button"
			onClick={() => handleClick()}>
			<span>{title}</span>
		</ButtonWithText>
	);
}
