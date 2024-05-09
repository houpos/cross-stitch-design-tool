'use client';
import { Project } from '../types';
import Button from './button';
import Cards from './cards';
import styles from './dashboard.module.scss';

const projects: Project[] = [
	{
		id: '1',
		title: 'First Project',
		height: '8',
		width: '8',
	},
	{
		id: '2',
		title: 'Second Project',
		height: '8',
		width: '8',
	},
	{
		id: '3',
		title: 'Third Project',
		height: '8',
		width: '8',
	},
	{
		id: '4',
		title: 'Fourth Project',
		height: '8',
		width: '8',
	},
	{
		id: '5',
		title: 'Fifth Project',
		height: '8',
		width: '8',
	},
	{
		id: '6',
		title: 'Sixth Project',
		height: '8',
		width: '8',
	},
	{
		id: '7',
		title: 'Seventh Project',
		height: '8',
		width: '8',
	},
	{
		id: '8',
		title: 'Eigth Project',
		height: '8',
		width: '8',
	},
];
export default function Dashboard() {
	return (
		<main className={styles.dashboardContainer}>
			{projects.length === 0 ? (
				<div className={styles.noProjects}>
					<img src="#" />
					<span className={styles.title}>
						You currently don't have any projects!
					</span>
					<span className={styles.subTitle}>
						Click the button below and get started.
					</span>
					<Button />
				</div>
			) : (
				<Cards projects={projects} />
			)}
		</main>
	);
}
