'use client';
import Button from './button';
import styles from './dashboard.module.scss';

const projects = [];
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
				<div>Woohoo! There are projects!</div>
			)}
		</main>
	);
}
