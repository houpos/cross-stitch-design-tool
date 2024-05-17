'use client';
import { useEffect, useRef } from 'react';
import styles from './modal.module.scss';
import CreateDesignForm from './create-design-form';
import CancelButton from './buttons/cancel-button';

type ModalProps = {
	isShowing: boolean;
	willClose: () => void;
};

export default function Modal({ isShowing, willClose }: ModalProps) {
	const dialogRef = useRef<HTMLDialogElement>(null);

	const handleClose = () => {
		dialogRef.current?.close();
		willClose();
	};

	useEffect(() => {
		if (!isShowing) {
			dialogRef.current?.close();
		} else if (!dialogRef.current?.open && isShowing) {
			dialogRef.current?.showModal();
		}
	}, [isShowing]);
	return (
		<dialog
			ref={dialogRef}
			className={styles.createDesignModal}>
			<div>
				<div className={styles.top}>
					<span>Create a design</span>
					<CancelButton handleClick={handleClose} />
				</div>
				<CreateDesignForm handleCloseModal={handleClose} />
			</div>
		</dialog>
	);
}
