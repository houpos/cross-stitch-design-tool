import { useEffect, useRef } from 'react';
import styles from './modal.module.scss';
import CreateDesignForm from './create-design-form';

export default function Modal({ show }: { show: boolean }) {
	const dialogRef = useRef<HTMLDialogElement>(null);

	useEffect(() => {
		if (!show) {
			dialogRef.current?.close();
		} else if (!dialogRef.current?.open && show) {
			dialogRef.current?.showModal();
		}
	}, [show]);
	return (
		<dialog
			ref={dialogRef}
			className={styles.createDesignModal}>
			<div>
				<div className={styles.top}>
					<span>Create a design</span>
					<button>
						<span>x</span>
					</button>
				</div>
				<CreateDesignForm />
			</div>
		</dialog>
	);
}
