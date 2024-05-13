import Button from './buttons/button';
import styles from './top-navigation.module.scss';

export default function TopNavigation() {
	return (
		<nav className={styles.navigationContainer}>
			<div>
				<img
					src="#"
					className={styles.logo}
				/>
			</div>
			<div className={styles.profileContainer}>
				<Button
					handleClick={() => console.log('button clicked')}
					title="Create a design"
				/>
				<img src="#" />
			</div>
		</nav>
	);
}
