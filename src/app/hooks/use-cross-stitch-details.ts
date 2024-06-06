'use client';
import { Color, Project } from '@/api/types';
import { getAllColorsAsObject } from '@/app/actions';
import { useEffect, useState } from 'react';
import { AppState, useAppContext } from '../contexts/context';

const symbols: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&'.split('');

export default function useCrossStitchDetails() {
	const { state }: { state: AppState } = useAppContext();
	const [allColors, setAllColors] = useState<{ [key: string]: Color }>({});
	const [currentProject, setCurrentProject] = useState<Project>();
	const [grid, setGrid] = useState<string[][]>();
	const [gridColors, setGridColors] = useState<{
		[key: string]: { count: number; symbol: string };
	}>();

	useEffect(() => {
		const updateAllColors = async () => {
			const allColorsAsObject = await getAllColorsAsObject();
			setAllColors(allColorsAsObject);
		};
		updateAllColors();
	}, []);

	useEffect(() => {
		if (state?.currentProject) {
			setCurrentProject(state.currentProject);
			setGrid(state.currentProject.gridData.grid);

			const colorsWithCountAndSymbol = Object.keys(
				state.currentProject.gridData.colorsUsed
			).reduce((acc, curr, index) => {
				acc[curr] = {
					count: state.currentProject?.gridData.colorsUsed[curr] || 0,
					symbol: symbols[index],
				};
				return acc;
			}, {} as { [key: string]: { count: number; symbol: string } });
			setGridColors(colorsWithCountAndSymbol);
		}
	}, [state?.currentProject]);
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

	const getStitchCount = (colorsWithCounts: {
		[key: string]: number;
	}): number =>
		Object.values(colorsWithCounts).reduce((acc, curr) => {
			acc = acc + curr;
			return acc;
		}, 0);

	return {
		getSkeinCount,
		getStitchCount,
		allColors,
		currentProject,
		grid,
		gridColors,
	};
}
