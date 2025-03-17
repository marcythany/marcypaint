// src/context/theme/ThemeProvider.tsx
import { useState, useEffect, ReactNode } from 'react';
import { ThemeContext, ThemeContextType, Theme } from './types';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const [theme, setTheme] = useState<Theme>('light');

	useEffect(() => {
		const savedTheme = localStorage.getItem('theme') as Theme;
		const systemDark = window.matchMedia(
			'(prefers-color-scheme: dark)'
		).matches;

		const initialTheme = savedTheme || (systemDark ? 'dark' : 'light');
		setTheme(initialTheme);
		document.documentElement.style.colorScheme = initialTheme;
		document.documentElement.classList.toggle(
			'dark-theme',
			initialTheme === 'dark'
		);
	}, []);

	const toggleTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(newTheme);
		localStorage.setItem('theme', newTheme);
		document.documentElement.style.colorScheme = newTheme;
		document.documentElement.classList.toggle(
			'dark-theme',
			newTheme === 'dark'
		);
	};

	const contextValue: ThemeContextType = {
		theme,
		toggleTheme,
	};

	return (
		<ThemeContext.Provider value={contextValue}>
			<div data-theme={theme} className='contents'>
				{children}
			</div>
		</ThemeContext.Provider>
	);
};
