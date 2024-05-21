import { getAllProjects } from '@/api/projects';
import styles from './page.module.scss';
import Cards from './components/cards';

export default async function Home() {
	const allProjects = await getAllProjects();
	return (
		<main className={styles.dashboardContainer}>
			{!allProjects ? (
				<div className={styles.noProjects}>
					<img src="#" />
					<span className={styles.title}>
						You currently don't have any projects!
					</span>
					<span className={styles.subTitle}>
						Click the button below and get started.
					</span>
					{/* <Button
						title="Create a design"
						handleClick={handleClick}
					/> */}
				</div>
			) : (
				<Cards projects={allProjects} />
			)}
		</main>
	);
}
