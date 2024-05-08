'use client';
import Button from './button';
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
				<Button />
				<img src="#" />
			</div>
		</nav>
	);
}
