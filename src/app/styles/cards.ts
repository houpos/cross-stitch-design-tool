import styled from 'styled-components';

export const CardContainer = styled.div`
	display: grid;
	justify-items: center;
	grid-template-columns: repeat(5, 1fr);
	column-gap: 3em;
	row-gap: 3em;
	width: 100%;
	margin: 0 auto;

	&.smallGrid {
		grid-template-columns: repeat(2, 1fr);
		column-gap: 1em;
		row-gap: 1em;
	}

	&.xSmallGrid {
		grid-template-columns: repeat(1, 1fr);
		column-gap: 0;
		row-gap: 1em;
	}
`;

export const CardWithImageAndTitle = styled.div`
	border-radius: 5px;
	overflow: hidden;
	max-width: 445px;
	box-shadow: 2px 2px 5px lightgray;

	.cardHeader {
		width: 100%;
		height: 175px;
		margin-bottom: 0.7em;
		overflow: hidden;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			transform: scale(1);
			transition: transform 0.5s ease-out;
		}
	}

	.cardBody {
		padding: 0.4em;

		.cardText {
			> * {
				margin-bottom: 0.5em;
			}

			p {
				font-size: 0.875em;
			}
		}
	}

	&:hover {
		img {
			transform: scale(1.2);
			filter: brightness(50%);
			transition: filter 0.5s, transform 0.5s ease-in;
		}
	}
`;
