import { RoundCancelButton } from '@/app/styles/buttons';
import { MdClose } from 'react-icons/md';

type ButtonProps = {
	handleClick: () => void;
};

export default function CancelButton({ handleClick }: ButtonProps) {
	return (
		<RoundCancelButton
			type="button"
			onClick={() => handleClick()}>
			<MdClose />
		</RoundCancelButton>
	);
}
