import { useTheme } from 'styled-components';
import styles from './create-design-form.module.scss';
import Button from './buttons/button';
import { Project } from '../types';
import { useState } from 'react';
import { availableProjectGridDimensions } from '../data/projects';
import { ActionType, useAppContext } from '../contexts/context';

export default function CreateDesignForm({
	handleClose,
}: {
	handleClose: () => void;
}) {
	const theme = useTheme();
	const { dispatch } = useAppContext();
	const [title, setTitle] = useState<string>('Your project title');
	const [dimensionsIndex, setDimensionsIndex] = useState(0);

	const prepareProject = () => {
		const project: Project = {
			id: 'project-1',
			title,
			height: availableProjectGridDimensions[dimensionsIndex].height,
			width: availableProjectGridDimensions[dimensionsIndex].width,
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
				<Button
					type="submit"
					title="Create"
					colors={theme.colors.buttons.primary}
					handleClick={prepareProject}
				/>
				<Button
					type="reset"
					title="Cancel"
					colors={theme.colors.buttons.cancel}
					handleClick={handleClose}
				/>
			</div>
		</form>
	);
}
