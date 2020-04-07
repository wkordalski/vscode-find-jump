export interface IConfig {
	jumpChars: string;
	excludeNextChars: number;
	onlyVisibleRanges: boolean;
	dimWhenActive: boolean;
	jumpCursorPosition: 'start' | 'end';

	letterBackground: string;
	letterForeground: string;
	matchBackground: string;
	matchForeground: string;

	light: {
		letterBackground: string;
		letterForeground: string;
		matchBackground: string;
		matchForeground: string;
	};

	overviewRulerMatchForeground: string;
}

export interface IMatch {
	start: number;
	end: number;
	excludedChars: string[];
}