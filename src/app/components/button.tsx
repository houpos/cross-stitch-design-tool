import MainButton from '../styles/buttons';

type ButtonProps = {
	handleClick: () => void;
};

export default function Button({ handleClick }: ButtonProps) {
	return (
		<MainButton
			type="button"
			onClick={() => handleClick()}>
			{' '}
			Create a design
		</MainButton>
	);
}
