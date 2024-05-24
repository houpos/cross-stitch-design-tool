'use client';
import { useEffect } from 'react';
import { ActionType, useAppContext } from '../contexts/context';
import styles from './drawing-grid.module.scss';
import { Project } from '@/api/types';

export default function DrawingGrid() {
	const { state, dispatch } = useAppContext();

	useEffect(() => {
		if (state?.currentProject && state.currentProject.grid.length === 0) {
			let emptyGrid = [];
			const stitchesPerInch = state.currentProject.width * 10;
			for (let i = 0; i < stitchesPerInch; i++) {
				const row = new Array(stitchesPerInch).fill(null);
				emptyGrid.push(row);
			}
			dispatch({ type: ActionType.EDIT_PROJECT, payload: emptyGrid });
		}
	}, [state?.currentProject]);

	const handleCellSelection = (rowIdx: number, cellIdx: number) => {
		const currentColor = state.selectedColor;
		if (!currentColor) return;
		const newGrid = [...state.currentProject.grid];
		newGrid[rowIdx][cellIdx] =
			newGrid[rowIdx][cellIdx] === currentColor.hex ? '' : currentColor.hex;
		dispatch({ type: ActionType.EDIT_PROJECT, payload: newGrid });
	};

	if (!state?.currentProject || !state?.currentProject?.grid) return null;
	const currentProject: Project = state.currentProject;

	return (
		<div className={styles.designGridContainer}>
			<table>
				<caption>{currentProject.title} design</caption>
				<tbody>
					{currentProject.grid.map((row, rowIdx) => {
						return (
							<tr
								className={styles.row}
								key={rowIdx}>
								{row.map((cell, cellIdx) => {
									return (
										<td
											className={styles.cell}
											style={{ background: cell }}
											key={cellIdx}>
											<button
												role="button"
												aria-label={`cell for row ${rowIdx}, column ${cellIdx}`}
												onClick={() => handleCellSelection(rowIdx, cellIdx)}
											/>
										</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
