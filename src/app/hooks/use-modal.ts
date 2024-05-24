import { useState } from 'react';

export default function useModal() {
	const [showModal, setShowModal] = useState(false);

	const handleModal = () => {
		setShowModal(!showModal);
	};

	return {
		showModal,
		handleModal,
	};
}
