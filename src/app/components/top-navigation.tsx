import { useState } from 'react';
import Button from './buttons/button';
import styles from './top-navigation.module.scss';
import Modal from './modal';

export default function TopNavigation() {
	const [showModal, setShowModal] = useState(false);

	const handleClick = () => {
		setShowModal(true);
	};
	return (
		<>
			<Modal
				isShowing={showModal}
				willClose={() => setShowModal(false)}
			/>
			<nav className={styles.navigationContainer}>
				<div>
					<img
						src="#"
						className={styles.logo}
					/>
				</div>
				<div className={styles.profileContainer}>
					<Button
						handleClick={handleClick}
						title="Create a design"
					/>
					<img src="#" />
				</div>
			</nav>
		</>
	);
}
