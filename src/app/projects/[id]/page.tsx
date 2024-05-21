'use client';
import { ActionType, useAppContext } from '@/app/contexts/context';
import { useEffect, useState } from 'react';
import styles from './page.module.scss';
import { getColorsAsObject, getDmcColors } from '@/api/colors';
import { Color, Project } from '@/api/types';

export default async function CurrentProject() {
	const dmcColors: Color[] = await getDmcColors();
	const allColorsAsObject: { [id: string]: Color } = await getColorsAsObject();
	const { state, dispatch } = useAppContext();
	const [currentProject, setCurrentProject] = useState<Project | null>(null);
	const [grid, setGrid] = useState<string[][]>();
	const [currentColor, setCurrentColor] = useState<Color>(dmcColors[0]);

	useEffect(() => {
		if (state?.currentProject) {
			setCurrentProject(state.currentProject);

			if (state.currentProject.grid.length === 0) {
				let newGrid = [];
				const stitchesPerInch = state.currentProject.width * 10;
				for (let i = 0; i < stitchesPerInch; i++) {
					const row = new Array(stitchesPerInch).fill(null);
					newGrid.push(row);
				}
				setGrid(newGrid);
			} else {
				setGrid(state.currentProject.grid);
			}
		}
	}, [state?.currentProject]);

	const handleCellSelection = (rowIdx: number, cellIdx: number) => {
		if (!grid) return;
		const newGrid = [...grid];
		newGrid[rowIdx][cellIdx] =
			newGrid[rowIdx][cellIdx] === currentColor.id ? '' : currentColor.id;
		setGrid(newGrid);
	};

	const handleSave = () => {
		dispatch({ type: ActionType.EDIT_PROJECT, payload: grid });
	};

	if (!currentProject) return null;
	return (
		<section className={styles.designContainer}>
			<div className={styles.infoContainer}>
				<h1>{currentProject.title}</h1>
				<div>
					{currentProject.height} x {currentProject.width}
				</div>
				<div
					className={styles.currentColor}
					style={{ background: currentColor.hex }}></div>
				<button
					role="button"
					onClick={() => handleSave()}>
					Save
				</button>
			</div>
			<div className={styles.creationContainer}>
				<div className={styles.designGridContainer}>
					<table>
						<caption>{currentProject.title} design</caption>
						<tbody>
							{grid?.map((row, rowIdx) => {
								return (
									<tr
										className={styles.row}
										key={rowIdx}>
										{row.map((cell, cellIdx) => {
											return (
												<td
													className={styles.cell}
													style={{ background: allColorsAsObject[cell]?.hex }}
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
				<div className={styles.colorContainer}>
					{dmcColors.map((color) => (
						<button
							className={styles.color}
							id={color.id}
							key={color.id}
							aria-label={color.name}
							role="button"
							style={{ background: color.hex }}
							onClick={() => setCurrentColor(color)}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
