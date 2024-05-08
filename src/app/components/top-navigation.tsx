'use client';
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
				<img src="#" />
			</div>
		</nav>
	);
}
