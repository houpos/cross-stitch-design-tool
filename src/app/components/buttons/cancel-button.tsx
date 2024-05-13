import { RoundButton } from '@/app/styles/buttons';
import { MdClose } from 'react-icons/md';
import { useTheme } from 'styled-components';

type ButtonProps = {
	handleClick: () => void;
};

export default function CancelButton({ handleClick }: ButtonProps) {
	const theme = useTheme();
	return (
		<RoundButton
			type="button"
			buttonProperties={theme.colors.buttons.cancel}
			onClick={() => handleClick()}>
			<MdClose />
		</RoundButton>
	);
}
