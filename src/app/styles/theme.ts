import colors from './colors';
import { Theme } from './types';

const theme: Theme = {
	fonts: {
		buttons: {
			primary: {
				fontSize: '18px',
			},
		},
	},
	colors: {
		buttons: {
			primary: {
				default: colors.indigoDye,
				active: colors.darkBlue,
				text: colors.white,
			},
		},
	},
};

export default theme;
