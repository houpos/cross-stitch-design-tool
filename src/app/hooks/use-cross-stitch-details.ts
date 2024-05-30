'use client';
import { Color } from '@/api/types';
import { getAllColorsAsObject } from '@/app/actions';
import { useEffect, useState } from 'react';

export default function useCrossStitchDetails() {
	const [allColors, setAllColors] = useState<{ [key: string]: Color }>({});

	useEffect(() => {
		const updateAllColors = async () => {
			const allColorsAsObject = await getAllColorsAsObject();
			setAllColors(allColorsAsObject);
		};

		updateAllColors();
	}, []);
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
	};
}
