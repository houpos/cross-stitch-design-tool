'use client';
import { useAppContext } from '../contexts/context';
import styles from './design-info.module.scss';

export default function DesignInformation() {
	const { state } = useAppContext();

	if (!state || !state.currentProject) return null;
	return (
		<>
			<h1>{state.currentProject.title}</h1>
			<div>
				{state.currentProject.height} x {state.currentProject.width}
			</div>
			<div
				className={styles.currentColor}
				style={{ background: state.selectedColor?.hex || 'transparent' }}></div>
		</>
	);
}
