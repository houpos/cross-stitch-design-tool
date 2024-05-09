import styles from './create-design-form.module.scss';
export default function CreateDesignForm() {
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
				<button
					type="submit"
					className={styles.create}>
					Create
				</button>
				<button
					id="cancel"
					type="reset"
					className={styles.cancel}>
					Cancel
				</button>
			</div>
		</form>
	);
}
