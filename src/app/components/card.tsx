import { ActionType, useAppContext } from '../contexts/context';
import { useRouter } from 'next/navigation';
import styles from './card.module.scss';

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
			<div className={styles.card}>
				<div className={styles.cardHeader}>
					<img
						className={styles.cardImage}
						src="/placholder.png"
					/>
				</div>
				<div className={styles.cardBody}>
					<span>{title}</span>
				</div>
			</div>
		</button>
	);
}
