import { Project } from './types';

const allProjects: Project[] = [
	{
		id: '1',
		title: 'First Project',
		height: 4,
		width: 4,
		gridData: { grid: [], colorsUsed: {} },
	},
	{
		id: '2',
		title: 'Second Project',
		height: 2,
		width: 2,
		gridData: { grid: [], colorsUsed: {} },
	},
	{
		id: '3',
		title: 'Third Project',
		height: 8,
		width: 8,
		gridData: { grid: [], colorsUsed: {} },
	},
	{
		id: '4',
		title: 'Fourth Project',
		height: 8,
		width: 8,
		gridData: { grid: [], colorsUsed: {} },
	},
	{
		id: '5',
		title: 'Fifth Project',
		height: 8,
		width: 8,
		gridData: { grid: [], colorsUsed: {} },
	},
	{
		id: '6',
		title: 'Sixth Project',
		height: 8,
		width: 8,
		gridData: { grid: [], colorsUsed: {} },
	},
	{
		id: '7',
		title: 'Seventh Project',
		height: 8,
		width: 8,
		gridData: { grid: [], colorsUsed: {} },
	},
	{
		id: '8',
		title: 'Eigth Project',
		height: 8,
		width: 8,
		gridData: { grid: [], colorsUsed: {} },
	},
];

export const getAllProjects = async (): Promise<Project[]> => {
	return allProjects;
};
