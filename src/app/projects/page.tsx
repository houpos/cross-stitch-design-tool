'use client';
import Button from '../components/buttons/button';
import Cards from '../components/cards';
import styles from './page.module.scss';
import { useEffect, useState } from 'react';
import Modal from '../components/modal';
import { ActionType, useAppContext } from '../contexts/context';
import { projects } from '../data/projects';

export default function Dashboard() {
	const { state, dispatch } = useAppContext();
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		if (!state || state?.allProjects.length === 0) {
			dispatch({ type: ActionType.ADD_INITIAL, payload: projects });
			return;
		}
	}, [state]);

	const handleClick = () => {
		setShowModal(true);
	};

	return (
		<>
			<Modal
				isShowing={showModal}
				willClose={() => setShowModal(false)}
			/>
			<main className={styles.dashboardContainer}>
				{state?.allProjects.length === 0 ? (
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
					<Cards projects={state.allProjects} />
				)}
			</main>
		</>
	);
}
