export type ButtonColorProps = {
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
			primary: ButtonColorProps;
			cancel: ButtonColorProps;
		};
	};
};
