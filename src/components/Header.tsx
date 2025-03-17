// src/components/Header.tsx
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../hooks/useTheme';
import { ThemeSwitcher } from './ThemeSwitcher';
import LocaleSwitcher from './LocaleSwitcher';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export const Header = () => {
	useTheme();
	const { t } = useTranslation();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	// State to track which nav link is active
	const [activeLink, setActiveLink] = useState('#simple-services');

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen((prev) => !prev);
	};

	// Navigation links for in-page sections
	const navLinks = [
		{
			href: '#simple-services',
			label: t('simple_services') || 'Serviços Simples',
		},
		{
			href: '#professional-services',
			label: t('professional_services') || 'Serviços Profissionais',
		},
		{
			href: '#additional-prices',
			label: t('additional_prices') || 'Preços Adicionais',
		},
		{
			href: '#payment',
			label: t('payment_methods') || 'Formas de Pagamento',
		},
	];

	// Handler to set active link and close mobile menu if open
	const handleNavClick = (href: string) => {
		setActiveLink(href);
		if (isMobileMenuOpen) setIsMobileMenuOpen(false);
	};

	return (
		<>
			{/* Skip to Content Link for Accessibility */}
			<a
				href='#main-content'
				className='absolute top-[-40px] left-4 z-50 bg-[rgba(0,0,0,0.7)] text-white p-2 rounded transition-all focus:top-2 focus:outline-none'
			>
				{t('skip_to_content') || 'Skip to content'}
			</a>

			<header
				role='banner'
				className='sticky top-0 z-50 glassmorphism border-b border-surface/20 transition-colors duration-300'
			>
				<nav className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex items-center justify-between h-16'>
						{/* Logo and Site Title */}
						<div className='flex items-center gap-4'>
							<div className='flex-shrink-0'>
								<div className='flex flex-col'>
									<h1 className='text-2xl font-bold tracking-tight'>
										<span className='inline-block bg-gradient-to-r from-[rgb(var(--color-primary-600))] to-[rgb(var(--color-secondary-300))] dark:from-[rgb(var(--color-primary-300))] dark:to-[rgb(var(--color-accent-300))] bg-clip-text text-transparent'>
											{t('welcome')}
										</span>
									</h1>
									<p className='text-sm text-on-surface opacity-80'>
										{t('prices_subtitle')}
									</p>
								</div>
							</div>

							{/* Desktop Navigation Links with hover animation via scale and background highlight */}
							<div className='hidden md:flex items-center gap-4'>
								{navLinks.map(({ href, label }) => (
									<a
										key={href}
										href={href}
										onClick={() => handleNavClick(href)}
										className={`group relative inline-block text-on-surface text-sm transition-all duration-300 transform hover:scale-105 
                      ${
												activeLink === href
													? 'bg-primary-50 dark:bg-primary-800 rounded'
													: ''
											}`}
									>
										{label}
									</a>
								))}
							</div>
						</div>

						{/* Controls and Mobile Menu Toggle */}
						<div className='flex items-center gap-2'>
							{/* Desktop Controls with smaller spacing */}
							<div className='hidden md:flex items-center gap-2'>
								<LocaleSwitcher />
								<ThemeSwitcher />
							</div>

							{/* Mobile Menu Button */}
							<div className='md:hidden'>
								<button
									onClick={toggleMobileMenu}
									aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
									className='text-on-surface hover:text-primary-600 dark:hover:text-accent-300 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-600 dark:focus:ring-accent-300'
								>
									{isMobileMenuOpen ? (
										<XMarkIcon className='h-6 w-6' aria-hidden='true' />
									) : (
										<Bars3Icon className='h-6 w-6' aria-hidden='true' />
									)}
								</button>
							</div>
						</div>
					</div>

					{/* Mobile Navigation Menu with similar animation */}
					{isMobileMenuOpen && (
						<div className='md:hidden mt-4 space-y-2'>
							{navLinks.map(({ href, label }) => (
								<a
									key={href}
									href={href}
									onClick={() => handleNavClick(href)}
									className={`group block text-on-surface text-sm transition-all duration-300 transform hover:scale-105 
                    ${
											activeLink === href
												? 'bg-primary-50 dark:bg-primary-800 rounded'
												: ''
										}`}
								>
									{label}
								</a>
							))}
							<div className='flex items-center gap-2 mt-2'>
								<LocaleSwitcher />
								<ThemeSwitcher />
							</div>
						</div>
					)}
				</nav>
			</header>
		</>
	);
};
