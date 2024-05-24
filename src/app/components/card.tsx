'use client';
import { ActionType, useAppContext } from '../contexts/context';
import { useRouter } from 'next/navigation';
import styles from './card.module.scss';
import { Project } from '@/api/types';

type CardProps = {
	project: Project;
};

export default function Card({ project }: CardProps) {
	const { dispatch } = useAppContext();
	const router = useRouter();
	const handleClick = () => {
		dispatch({ type: ActionType.SELECT_PROJECT, payload: project });
		router.push(`projects/${project.id}`);
	};
	return (
		<button
			role="link"
			onClick={() => handleClick()}
			id={project.id}>
			<div className={styles.card}>
				<div className={styles.cardHeader}>
					<img
						className={styles.cardImage}
						src="/placholder.png"
					/>
				</div>
				<div className={styles.cardBody}>
					<span>{project.title}</span>
				</div>
			</div>
		</button>
	);
}
