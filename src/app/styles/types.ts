export type ButtonTypes = {
	default: string;
	active: string;
	text: string;
};

export type Theme = {
	fonts: {
		buttons: {
			primary: {
				fontSize: string;
			};
		};
	};
	colors: {
		buttons: {
			primary: ButtonTypes;
			cancel: ButtonTypes;
		};
	};
};
