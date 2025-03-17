// src/components/ImageModal.tsx
import { useEffect, useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { useTranslation } from 'react-i18next';

interface ImageModalProps {
	isOpen: boolean;
	onClose: () => void;
	src: string | null;
	alt: string;
}

export const ImageModal = ({ isOpen, onClose, src, alt }: ImageModalProps) => {
	const { t } = useTranslation();
	const [isLoading, setIsLoading] = useState(true);
	const [internalSrc, setInternalSrc] = useState<string | null>(null);

	useEffect(() => {
		const handleEscape = (event: KeyboardEvent) => {
			if (event.key === 'Escape') onClose();
		};

		if (isOpen && src) {
			document.body.style.overflow = 'hidden';
			document.addEventListener('keydown', handleEscape);
			setIsLoading(true);
			setInternalSrc(src);
		} else if (isOpen && !src) {
			// No image provided; disable loading so that fallback message appears.
			setIsLoading(false);
			setInternalSrc(null);
		} else {
			setInternalSrc(null);
		}

		return () => {
			document.body.style.overflow = 'auto';
			document.removeEventListener('keydown', handleEscape);
		};
	}, [isOpen, onClose, src]);

	if (!isOpen) return null;

	return (
		<div
			role='dialog'
			aria-modal='true'
			aria-labelledby='modal-image-title'
			className='fixed inset-0 z-50 flex items-center justify-center'
			onClick={onClose}
		>
			{/* Background overlay */}
			<div className='fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity' />

			{/* Modal container with animation */}
			<div className='relative glassmorphism rounded-lg shadow-2xl w-full max-w-6xl max-h-[90vh] mx-4 overflow-hidden transition-all duration-300 scale-95 animate-fade-in-zoom-in'>
				{/* Close button with hover effect */}
				<button
					onClick={onClose}
					className='absolute right-4 top-4 z-20 text-on-surface hover:text-accent-600 hover:scale-110 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-accent-600 rounded-full p-1'
					aria-label='Fechar modal'
				>
					<XMarkIcon className='h-8 w-8' />
				</button>

				<div className='flex items-center justify-center h-full relative min-h-[300px]'>
					{isLoading && src && (
						<div className='absolute inset-0 flex flex-col items-center justify-center bg-surface/10 animate-pulse space-y-4'>
							<div className='w-full h-64 bg-gradient-to-r from-surface/10 via-surface/20 to-surface/10 animate-shimmer' />
							<div className='w-4/5 h-2 rounded-full bg-surface/20' />
							<div className='w-3/5 h-2 rounded-full bg-surface/20' />
						</div>
					)}

					<div className='w-full h-full flex items-center justify-center'>
						{internalSrc ? (
							<img
								id='modal-image-title'
								src={internalSrc}
								alt={alt}
								className={`object-contain max-h-[80vh] w-auto transition-opacity duration-300 ${
									isLoading ? 'opacity-0' : 'opacity-100'
								}`}
								draggable='false'
								loading='lazy'
								decoding='async'
								onLoad={() => setIsLoading(false)}
								onError={() => {
									setIsLoading(false);
									setInternalSrc(null);
								}}
							/>
						) : (
							// Fallback container with high contrast text for accessibility.
							<div className='p-8 text-center bg-white/95 dark:bg-gray-800/95 rounded'>
								<p
									className='text-lg text-black dark:text-white'
									style={{ backdropFilter: 'none' }}
								>
									{t('no_image_message')}
								</p>
							</div>
						)}
					</div>
				</div>

				{isLoading && (
					<div className='absolute bottom-0 left-0 right-0 h-1.5 bg-surface/20'>
						<div className='h-full bg-accent-600 w-0 animate-progress' />
					</div>
				)}
			</div>
		</div>
	);
};

export default ImageModal;
