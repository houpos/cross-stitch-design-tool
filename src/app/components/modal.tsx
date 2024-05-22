'use client';
import { useEffect, useRef } from 'react';
import styles from './modal.module.scss';
import CreateDesignForm from './create-design-form';
import { MdClose } from 'react-icons/md';
import { useModalContext } from '../contexts/modal-context';

export default function Modal() {
	const { showModal, handleModal } = useModalContext();
	const dialogRef = useRef<HTMLDialogElement>(null);

	useEffect(() => {
		if (!showModal) {
			dialogRef.current?.close();
		} else if (!dialogRef.current?.open && showModal) {
			dialogRef.current?.showModal();
		}
	}, [showModal]);
	return (
		<dialog
			ref={dialogRef}
			className={styles.createDesignModal}>
			<div>
				<div className={styles.top}>
					<span>Create a design</span>
					<button
						className="round-button cancel"
						type="button"
						onClick={() => handleModal()}>
						<MdClose />
					</button>
				</div>
				<CreateDesignForm handleClose={handleModal} />
			</div>
		</dialog>
	);
}
