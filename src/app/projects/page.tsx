'use client';
import { Project } from '../types';
import Button from '../components/buttons/button';
import Cards from '../components/cards';
import styles from './page.module.scss';
import { useState } from 'react';
import Modal from '../components/modal';
import { useRouter } from 'next/navigation';

const projects: Project[] = [];
// const projects: Project[] = [
// 	{
// 		id: '1',
// 		title: 'First Project',
// 		height: '8',
// 		width: '8',
// 	},
// 	{
// 		id: '2',
// 		title: 'Second Project',
// 		height: '8',
// 		width: '8',
// 	},
// 	{
// 		id: '3',
// 		title: 'Third Project',
// 		height: '8',
// 		width: '8',
// 	},
// 	{
// 		id: '4',
// 		title: 'Fourth Project',
// 		height: '8',
// 		width: '8',
// 	},
// 	{
// 		id: '5',
// 		title: 'Fifth Project',
// 		height: '8',
// 		width: '8',
// 	},
// 	{
// 		id: '6',
// 		title: 'Sixth Project',
// 		height: '8',
// 		width: '8',
// 	},
// 	{
// 		id: '7',
// 		title: 'Seventh Project',
// 		height: '8',
// 		width: '8',
// 	},
// 	{
// 		id: '8',
// 		title: 'Eigth Project',
// 		height: '8',
// 		width: '8',
// 	},
// ];
export default function Dashboard() {
	const router = useRouter();
	const [showModal, setShowModal] = useState(false);

	const handleClick = () => {
		setShowModal(true);
	};

	const handleProjectCreation = (project: Project) => {
		console.log('create project!', project);
		router.push(`/projects/${project.id}`);
	};

	return (
		<>
			<Modal
				isShowing={showModal}
				willClose={() => setShowModal(false)}
				willSubmit={handleProjectCreation}
			/>
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
						<Button
							title="Create a design"
							handleClick={handleClick}
						/>
					</div>
				) : (
					<Cards projects={projects} />
				)}
			</main>
		</>
	);
}
