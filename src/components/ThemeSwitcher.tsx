// src/components/ThemeSwitcher.tsx
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../hooks/useTheme';

export const ThemeSwitcher = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<button
			onClick={toggleTheme}
			className='flex items-center justify-center rounded-lg p-2 transition-all
        hover:bg-primary-200/20 hover:text-primary-600
        dark:hover:bg-accent-200/20 dark:hover:text-accent-300
        focus:outline-none focus:ring-2 focus:ring-primary-600 dark:focus:ring-accent-300'
			aria-label='Toggle theme'
		>
			{theme === 'light' ? (
				<MoonIcon className='h-6 w-6 transition-transform duration-300 hover:scale-110' />
			) : (
				<SunIcon className='h-6 w-6 transition-transform duration-300 hover:scale-110' />
			)}
		</button>
	);
};
