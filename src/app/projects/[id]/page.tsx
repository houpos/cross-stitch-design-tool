'use client';
import { useAppContext } from '@/app/contexts/context';
import { Project } from '@/app/types';
import { useEffect, useState } from 'react';
import styles from './page.module.scss';
import { dmcColors } from '@/app/data/colors';

export default function CurrentProject() {
	const { state, dispatch } = useAppContext();
	const [currentProject, setCurrentProject] = useState<Project | null>(null);
	const [grid, setGrid] = useState<number[][]>();

	useEffect(() => {
		if (state?.currentProject) {
			setCurrentProject(state.currentProject);
			let newGrid = [];
			const stitchesPerInch = state.currentProject.width * 10;
			for (let i = 0; i < state.currentProject.height; i++) {
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
				<div className={styles.currentColor}></div>
			</div>
			<div className={styles.creationContainer}>
				<div className={styles.designGridContainer}>
					{grid?.map((row, rowIdx) => {
						return (
							<div
								className={styles.row}
								key={rowIdx}>
								{row.map((cell, cellIdx) => {
									return (
										<div
											className={styles.cell}
											key={cellIdx}
										/>
									);
								})}
							</div>
						);
					}) || <div>Loading ...</div>}
				</div>
				<div className={styles.colorContainer}>
					{dmcColors.map((color) => (
						<button
							className={styles.color}
							id={color.dmcId}
							key={color.dmcId}
							aria-label={color.name}
							role="button"
							style={{ background: color.hex }}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
