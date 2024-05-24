import { Project } from '@/api/types';
import Card from './card';
import styles from './cards.module.scss';

type CardsProps = {
	projects: Project[];
};

export default function Cards({ projects }: CardsProps) {
	return (
		<div className={styles.cardContainer}>
			{projects.map((project) => (
				<Card
					key={project.id}
					project={project}
				/>
			))}
		</div>
	);
}
