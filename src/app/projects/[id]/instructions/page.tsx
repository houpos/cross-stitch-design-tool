'use client';
import { useAppContext } from '@/app/contexts/context';
import styles from './page.module.scss';
import { Color } from '@/api/types';
import { useEffect, useState } from 'react';
import { getAllColorsAsObject } from '@/app/actions';

export default function Instructions() {
	const { state } = useAppContext();
	const [allColors, setAllColors] = useState<{ [key: string]: Color }>({});

	useEffect(() => {
		const updateAllColors = async () => {
			const allColorsAsObject = await getAllColorsAsObject();
			setAllColors(allColorsAsObject);
		};

		updateAllColors();
	}, []);

	const getStitchCount = (colorsWithCounts: {
		[key: string]: number;
	}): number =>
		Object.values(colorsWithCounts).reduce((acc, curr) => {
			acc = acc + curr;
			return acc;
		}, 0);

	const getSkeinCount = (colorCount: number): number => {
		// https://www.mismatch.co.uk/cross.htm#floss_amt
		/* A skein of floss is approximately 8-1/2 yards long. Assume most people
				stitch with an 18" length of floss. This gives 17 segments of 18" each per skein.

				Most of the time, people stitch with more than one strand. There are 6 strands of floss per skein. So 6/strands_used is the number of pieces per segment.

				Allow 3" per 18" length for securing the beginning and ending, and for general waste. This gives 15" of usable thread per 18" piece.

				Now, how many inches of floss does each X take? Using the Pythagorean Theorem to calculate the length of each half stitch on 14 count fabric, and allowing for the vertical lengths on the back, and allowing a little for slop, we get 6/count (where count is the number of stitches per inch). Remember, I said there was a fair amount of approximating going on.

				stitches_per_skein = 17 * (15 / (6 / count)) * (6 / strands_used);

			stitches_per_skein = 17 * (15 / (6 / 14)) * (6 / 2);
		*/
		return Math.ceil(colorCount / 1785);
	};

	if (!state || !state.currentProject) return null;
	const currentProject = state.currentProject;
	return (
		<div className={styles.instructionContainer}>
			<div className={styles.titleContainer}>
				<h1>{currentProject.title}</h1>
				<span className={styles.subTitle}>
					cross stitch diagram and instructions
				</span>
				<hr className={styles.printOnly} />
			</div>
			<div className={styles.designContainer}>
				[drawing with symbols goes here]
			</div>
			<div className={styles.designInfo}>
				<h2>Design Information</h2>
				<ul>
					<li>
						Dimensions (W x H): {currentProject.width}in x{' '}
						{currentProject.height}in
					</li>
					<li>
						Stitch count: {getStitchCount(currentProject.gridData.colorsUsed)}
					</li>
				</ul>
			</div>
			<div className={styles.tools}>
				<h2>Tools</h2>
				<ul>
					<li>Cross stitch fabric (14 count)</li>
					<li>Cross stitch needle</li>
					<li>Scissors</li>
					<li>Embroidery hoop</li>
					<li>
						DMC embroidery floss (see <strong>Floss &amp; Colors</strong>{' '}
						section)
					</li>
				</ul>
			</div>
			<div className={styles.floss}>
				<h2>Floss &amp; Colors</h2>
				<table>
					<thead>
						<tr>
							<th>Symbol</th>
							<th>Color</th>
							<th>Color name</th>
							<th>DMC color</th>
							<th># Skeins*</th>
						</tr>
					</thead>
					<tbody>
						{Object.keys(currentProject.gridData.colorsUsed).map(
							(hex, index) => (
								<tr key={index}>
									<td>TBD</td>
									<td>
										<div
											className={styles.box}
											style={{ backgroundColor: hex }}
										/>
									</td>
									<td>{allColors[hex]?.name}</td>
									<td>{allColors[hex]?.id}</td>
									<td>
										{getSkeinCount(currentProject.gridData.colorsUsed[hex])}
									</td>
								</tr>
							)
						)}
					</tbody>
				</table>
				<span>
					* Assuming 8m 6-strand embroidery floss, using 2 strands per stitch on
					14 count fabric
				</span>
			</div>
			<h2>Getting Started</h2>
		</div>
	);
}
