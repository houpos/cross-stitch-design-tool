'use server';

import { getDmcColors } from '@/api/colors';
import { Color } from '@/api/types';

export const getAllColorsAsObject = async (): Promise<{
	[key: string]: Color;
}> => {
	const allColors = await getDmcColors();
	return allColors.reduce((acc, curr) => {
		acc[curr.hex] = curr;
		return acc;
	}, {} as { [key: string]: Color });
};
