import { CardContainer } from '../styles/cards';
import { Project } from '../types';
import Card from './card';

type CardsProps = {
	projects: Project[];
};

export default function Cards({ projects }: CardsProps) {
	return (
		<CardContainer>
			{projects.map((project) => (
				<Card title={project.title} />
			))}
		</CardContainer>
	);
}
