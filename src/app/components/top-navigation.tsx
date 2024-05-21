import { useState } from 'react';
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
					<button
						className="button-with-text button"
						type="button"
						onClick={() => handleClick()}>
						Create a design
					</button>
					<img src="#" />
				</div>
			</nav>
		</>
	);
}
