'use client';
import styles from './create-design-form.module.scss';
import { useState } from 'react';
import { ActionType, useAppContext } from '../contexts/context';
import { Project, ProjectDimension } from '@/api/types';

export default function CreateDesignForm({
	handleClose,
}: {
	handleClose: () => void;
}) {
	const availableProjectGridDimensions: ProjectDimension[] = [
		{ height: 2, width: 2, display: '2 x 2' },
		{ height: 4, width: 4, display: '4 x 4' },
		{ height: 6, width: 6, display: '6 x 6' },
		{ height: 8, width: 8, display: '8 x 8' },
	];
	const { dispatch } = useAppContext();
	const [title, setTitle] = useState<string>('Your project title');
	const [dimensionsIndex, setDimensionsIndex] = useState(0);

	const prepareProject = () => {
		const project: Project = {
			id: 'project-1',
			title,
			height: availableProjectGridDimensions[dimensionsIndex].height,
			width: availableProjectGridDimensions[dimensionsIndex].width,
			grid: [],
		};

		dispatch({ type: ActionType.ADD_PROJECT, payload: project });
		handleClose();
	};

	return (
		<form
			method="dialog"
			className={styles.createDesignForm}>
			<div className={styles.row}>
				<label htmlFor="projectTitle">Title</label>
				<input
					autoFocus
					type="text"
					id="projectTitle"
					name="projectTitle"
					required
					minLength={4}
					maxLength={20}
					size={20}
					pattern="[a-zA-Z]\s"
					value={title}
					onChange={(e) => setTitle(e.target?.value)}
				/>
			</div>
			<div className={styles.row}>
				<label htmlFor="projectDimensions">Dimensions</label>
				<select
					required
					id="projectDimensions"
					name="projectDimensions"
					value={dimensionsIndex}
					onChange={(e) => setDimensionsIndex(parseInt(e.target?.value))}>
					{availableProjectGridDimensions.map((dimension, index) => (
						<option
							key={index}
							value={index}>
							{dimension.display}
						</option>
					))}
				</select>
			</div>
			<div className={styles.buttonContainer}>
				<button
					className="button-with-text submit"
					type="submit"
					onClick={() => prepareProject()}>
					Create
				</button>
				<button
					className="button-with-text cancel"
					type="reset"
					onClick={() => handleClose()}>
					Cancel
				</button>
			</div>
		</form>
	);
}
