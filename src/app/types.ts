export type Project = {
	id: string;
	title: string;
	height: number;
	width: number;
	grid: string[][];
};

export type Color = {
	id: string;
	name: string;
	red?: number;
	green?: number;
	blue?: number;
	hex: string;
};
