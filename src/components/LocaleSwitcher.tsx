// src/components/LocaleSwitcher.tsx
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { CheckIcon } from '@heroicons/react/24/solid';

const LocaleSwitcher: FC = () => {
	const { i18n } = useTranslation();

	return (
		<div className='flex gap-1 rounded-lg bg-surface/20 p-1 backdrop-blur-sm shadow-sm'>
			<button
				onClick={() => i18n.changeLanguage('pt')}
				className={`flex items-center gap-1 rounded-md px-2 py-1 transition-all duration-200
          ${
						i18n.language === 'pt'
							? 'bg-primary-100/40 text-primary-600 ring-2 ring-primary-600 dark:bg-accent-100/20 dark:ring-accent-300 dark:text-accent-300'
							: 'text-on-surface/90 hover:bg-surface/30 hover:text-primary-600 hover:scale-105 dark:hover:text-accent-300'
					}
          focus:outline-none focus:ring-2 focus:ring-primary-600 dark:focus:ring-accent-300`}
			>
				{i18n.language === 'pt' && (
					<CheckIcon className='h-4 w-4 text-current animate-pop-in' />
				)}
				<span className='flag-icon text-xs'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 36 36'
					>
						<path
							fill='#009b3a'
							d='M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z'
						/>
						<path fill='#fedf01' d='M32.728 18L18 29.124L3.272 18L18 6.875z' />
						<circle cx='17.976' cy='17.924' r='6.458' fill='#002776' />
						<path
							fill='#cbe9d4'
							d='M12.277 14.887a6.4 6.4 0 0 0-.672 2.023c3.995-.29 9.417 1.891 11.744 4.595c.402-.604.7-1.28.883-2.004c-2.872-2.808-7.917-4.63-11.955-4.614'
						/>
						<path fill='#88c9f9' d='M12 18.233h1v1h-1zm1 2h1v1h-1z' />
						<path
							fill='#55acee'
							d='M15 18.233h1v1h-1zm2 1h1v1h-1zm4 2h1v1h-1zm-3 1h1v1h-1zm3-6h1v1h-1z'
						/>
						<path fill='#3b88c3' d='M19 20.233h1v1h-1z' />
					</svg>
				</span>
			</button>

			<button
				onClick={() => i18n.changeLanguage('en')}
				className={`flex items-center gap-1 rounded-md px-2 py-1 transition-all duration-200
          ${
						i18n.language === 'en'
							? 'bg-primary-100/40 text-primary-600 ring-2 ring-primary-600 dark:bg-accent-100/20 dark:ring-accent-300 dark:text-accent-300'
							: 'text-on-surface/90 hover:bg-surface/30 hover:text-primary-600 hover:scale-105 dark:hover:text-accent-300'
					}
          focus:outline-none focus:ring-2 focus:ring-primary-600 dark:focus:ring-accent-300`}
			>
				{i18n.language === 'en' && (
					<CheckIcon className='h-4 w-4 text-current animate-pop-in' />
				)}
				<span className='flag-icon text-xs'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 36 36'
					>
						<path
							fill='#b22334'
							d='M35.445 7C34.752 5.809 33.477 5 32 5H18v2zM0 25h36v2H0zm18-8h18v2H18zm0-4h18v2H18zM0 21h36v2H0zm4 10h28c1.477 0 2.752-.809 3.445-2H.555c.693 1.191 1.968 2 3.445 2M18 9h18v2H18z'
						/>
						<path
							fill='#eee'
							d='M.068 27.679q.025.14.059.277q.04.15.092.296c.089.259.197.509.333.743L.555 29h34.89l.002-.004a4 4 0 0 0 .332-.741a4 4 0 0 0 .152-.576c.041-.22.069-.446.069-.679H0c0 .233.028.458.068.679M0 23h36v2H0zm0-4v2h36v-2H18zm18-4h18v2H18zm0-4h18v2H18zM.555 7l-.003.005zM.128 8.044c.025-.102.06-.199.092-.297a4 4 0 0 0-.092.297M18 9h18c0-.233-.028-.459-.069-.68a3.6 3.6 0 0 0-.153-.576A4 4 0 0 0 35.445 7H18z'
						/>
						<path fill='#3c3b6e' d='M18 5H4a4 4 0 0 0-4 4v10h18z' />
						<path
							fill='#fff'
							d='m2.001 7.726l.618.449l-.236.725L3 8.452l.618.448l-.236-.725L4 7.726h-.764L3 7l-.235.726zm2 2l.618.449l-.236.725l.617-.448l.618.448l-.236-.725L6 9.726h-.764L5 9l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L9 9l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L13 9l-.235.726zm-8 4l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L5 13l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L9 13l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L13 13l-.235.726zm-6-6l.618.449l-.236.725L7 8.452l.618.448l-.236-.725L8 7.726h-.764L7 7l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L11 7l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L15 7l-.235.726zm-12 4l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L3 11l-.235.726zM6.383 12.9L7 12.452l.618.448l-.236-.725l.618-.449h-.764L7 11l-.235.726h-.764l.618.449zm3.618-1.174l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L11 11l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L15 11l-.235.726zm-12 4l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L3 15l-.235.726zM6.383 16.9L7 16.452l.618.448l-.236-.725l.618-.449h-.764L7 15l-.235.726h-.764l.618.449zm3.618-1.174l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L11 15l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L15 15l-.235.726z'
						/>
					</svg>
				</span>
			</button>
		</div>
	);
};

export default LocaleSwitcher;
