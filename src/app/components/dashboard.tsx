'use client';
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
					<button
						style={{
							padding: '9px',
							backgroundColor: '#184E77',
							marginRight: '15px',
							borderRadius: '5px',
							border: 'none',
							color: 'white',
							fontSize: '18px',
						}}>
						Create a design
					</button>
				</div>
			) : (
				<div>Woohoo! There are projects!</div>
			)}
		</main>
	);
}
