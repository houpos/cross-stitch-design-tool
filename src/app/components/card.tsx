import { CardWithImageAndTitle } from '../styles/cards';

type CardProps = {
	title: string;
};

export default function Card({ title }: CardProps) {
	return (
		<CardWithImageAndTitle>
			<div className="cardHeader">
				<img src="/placholder.png" />
			</div>
			<div className="cardBody">
				<span>{title}</span>
			</div>
		</CardWithImageAndTitle>
	);
}
