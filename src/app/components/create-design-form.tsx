import { useTheme } from 'styled-components';
import styles from './create-design-form.module.scss';
import Button from './buttons/button';

export default function CreateDesignForm({
	handleCloseModal,
}: {
	handleCloseModal: () => void;
}) {
	const theme = useTheme();
	const handleCreate = () => {
		console.log('create!');
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
				/>
			</div>
			<div className={styles.row}>
				<label htmlFor="projectDimensions">Dimensions</label>
				<select
					required
					id="projectDimensions"
					name="projectDimensions">
					<option>4 x 4</option>
					<option>6 x 6</option>
					<option>8 x 8</option>
				</select>
			</div>
			<div className={styles.buttonContainer}>
				<Button
					type="submit"
					title="Create"
					colors={theme.colors.buttons.primary}
					handleClick={handleCreate}
				/>
				<Button
					type="reset"
					title="Cancel"
					colors={theme.colors.buttons.cancel}
					handleClick={handleCloseModal}
				/>
			</div>
		</form>
	);
}
