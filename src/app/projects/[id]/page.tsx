'use client';
import { useAppContext } from '@/app/contexts/context';
import { Color, Project } from '@/app/types';
import { useEffect, useState } from 'react';
import styles from './page.module.scss';
import { dmcColors } from '@/app/data/colors';

export default function CurrentProject() {
	const { state, dispatch } = useAppContext();
	const [currentProject, setCurrentProject] = useState<Project | null>(null);
	const [grid, setGrid] = useState<number[][]>();
	const [currentColor, setCurrentColor] = useState<Color>(dmcColors[0]);

	useEffect(() => {
		if (state?.currentProject) {
			setCurrentProject(state.currentProject);
			let newGrid = [];
			const stitchesPerInch = state.currentProject.width * 10;
			for (let i = 0; i < stitchesPerInch; i++) {
				const row = new Array(stitchesPerInch).fill(null);
				newGrid.push(row);
			}
			console.log('new grid', newGrid);
			setGrid(newGrid);
		}
	}, [state?.currentProject]);

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
												<td className={styles.cell}>
													<button
														key={cellIdx}
														role="button"
														aria-label={`ce`}
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
