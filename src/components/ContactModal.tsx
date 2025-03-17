// src/components/ContactModal.tsx
import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import {
	EnvelopeIcon,
	CloudIcon,
	ChatBubbleLeftIcon,
} from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

interface ContactModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
	const { t } = useTranslation();

	if (!isOpen) return null;

	return (
		<div
			role='dialog'
			aria-modal='true'
			className='fixed inset-0 z-50 flex items-center justify-center'
			onClick={onClose}
		>
			{/* Background Overlay */}
			<div className='fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity' />

			{/* Modal Container */}
			<div
				className='relative glassmorphism rounded-lg shadow-2xl w-full max-w-md mx-4 p-6 overflow-hidden transition-all duration-300 scale-95 animate-fade-in-zoom-in'
				onClick={(e) => e.stopPropagation()}
			>
				{/* Close Button */}
				<button
					onClick={onClose}
					aria-label={t('close_modal')}
					className='absolute right-4 top-4 z-20 text-on-surface hover:text-accent-600 hover:scale-110 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-accent-600 rounded-full p-1'
				>
					<XMarkIcon className='h-8 w-8' />
				</button>

				{/* Title and Description */}
				<h2
					id='contact-modal-title'
					className='mb-4 text-2xl font-bold text-primary-600 dark:text-primary-300'
				>
					{t('contact_modal_title')}
				</h2>
				<p className='mb-6 text-on-surface'>{t('contact_modal_description')}</p>

				{/* Contact Options */}
				<div className='flex flex-col gap-4'>
					<a
						href='mailto:marcythany@gmail.com'
						target='_blank'
						rel='noopener noreferrer'
						className='flex items-center gap-2 p-3 border rounded-lg hover:bg-[rgb(var(--color-surface)/0.3)] transition-colors'
						aria-label={t('contact_email')}
					>
						<EnvelopeIcon className='h-6 w-6' />
						<span>{t('contact_email')}</span>
					</a>
					<a
						href='https://bsky.app/profile/marcypaint.bsky.social'
						target='_blank'
						rel='noopener noreferrer'
						className='flex items-center gap-2 p-3 border rounded-lg hover:bg-[rgb(var(--color-surface)/0.3)] transition-colors'
						aria-label={t('contact_bluesky')}
					>
						<CloudIcon className='h-6 w-6' />
						<span>{t('contact_bluesky')}</span>
					</a>
					<a
						href='https://twitter.com/marcypaint'
						target='_blank'
						rel='noopener noreferrer'
						className='flex items-center gap-2 p-3 border rounded-lg hover:bg-[rgb(var(--color-surface)/0.3)] transition-colors'
						aria-label={t('contact_twitter')}
					>
						<svg
							className='h-6 w-6'
							fill='currentColor'
							viewBox='0 0 24 24'
							aria-hidden='true'
						>
							<path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
						</svg>
						<span>{t('contact_twitter')}</span>
					</a>
					<button
						onClick={() => navigator.clipboard.writeText('marcythany')}
						className='flex items-center gap-2 p-3 border rounded-lg hover:bg-[rgb(var(--color-surface)/0.3)] transition-colors focus:outline-none focus:ring-2 focus:ring-primary-600'
						aria-label={t('contact_discord')}
					>
						<ChatBubbleLeftIcon className='h-6 w-6' />
						<span>{t('contact_discord')}</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default ContactModal;
