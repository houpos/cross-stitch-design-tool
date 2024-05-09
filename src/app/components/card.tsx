import Link from 'next/link';
import { CardWithImageAndTitle } from '../styles/cards';

type CardProps = {
	id: string;
	title: string;
};

export default function Card({ id, title }: CardProps) {
	return (
		<Link href={`/projects/${id}`}>
			<CardWithImageAndTitle>
				<div className="cardHeader">
					<img src="/placholder.png" />
				</div>
				<div className="cardBody">
					<span>{title}</span>
				</div>
			</CardWithImageAndTitle>
		</Link>
	);
}
