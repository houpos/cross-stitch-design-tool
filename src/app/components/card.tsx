import { CardWithImageAndTitle } from '../styles/cards';
import { ActionType, useAppContext } from '../contexts/context';
import { useRouter } from 'next/navigation';

type CardProps = {
	id: string;
	title: string;
};

export default function Card({ id, title }: CardProps) {
	const { dispatch } = useAppContext();
	const router = useRouter();
	const handleClick = () => {
		dispatch({ type: ActionType.SELECT_PROJECT, payload: id });
		router.push(`projects/${id}`);
	};
	return (
		<button
			role="link"
			onClick={() => handleClick()}
			id={id}>
			<CardWithImageAndTitle>
				<div className="cardHeader">
					<img src="/placholder.png" />
				</div>
				<div className="cardBody">
					<span>{title}</span>
				</div>
			</CardWithImageAndTitle>
		</button>
	);
}
