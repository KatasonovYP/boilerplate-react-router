import { useContext } from 'react';
import {
	LOCAL_STORAGE_THEME_KEY,
	Theme,
	ThemeContext,
	ThemeContextProps,
} from 'shared/config';

interface UseThemeResult {
	theme: Theme;
	toggleTheme: () => void;
}

export function useTheme(): UseThemeResult {
	const { theme, setTheme } = useContext(
		ThemeContext,
	) as Required<ThemeContextProps>;

	function toggleTheme() {
		const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
		setTheme(newTheme);
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
	}

	return { theme, toggleTheme };
}
