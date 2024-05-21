import { Project } from '../types';

export const availableProjectGridDimensions = [
	{ height: 2, width: 2, display: '2 x 2' },
	{ height: 4, width: 4, display: '4 x 4' },
	{ height: 6, width: 6, display: '6 x 6' },
	{ height: 8, width: 8, display: '8 x 8' },
];

export const projects: Project[] = [
	{
		id: '1',
		title: 'First Project',
		height: 4,
		width: 4,
		grid: [],
	},
	{
		id: '2',
		title: 'Second Project',
		height: 2,
		width: 2,
		grid: [],
	},
	{
		id: '3',
		title: 'Third Project',
		height: 8,
		width: 8,
		grid: [],
	},
	{
		id: '4',
		title: 'Fourth Project',
		height: 8,
		width: 8,
		grid: [],
	},
	{
		id: '5',
		title: 'Fifth Project',
		height: 8,
		width: 8,
		grid: [],
	},
	{
		id: '6',
		title: 'Sixth Project',
		height: 8,
		width: 8,
		grid: [],
	},
	{
		id: '7',
		title: 'Seventh Project',
		height: 8,
		width: 8,
		grid: [],
	},
	{
		id: '8',
		title: 'Eigth Project',
		height: 8,
		width: 8,
		grid: [],
	},
];
