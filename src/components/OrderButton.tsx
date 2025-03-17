// src/components/OrderButton.tsx
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PlusIcon } from '@heroicons/react/24/outline';
import ContactModal from './ContactModal';

const OrderButton = () => {
	const { t } = useTranslation();
	const [modalOpen, setModalOpen] = useState(false);

	return (
		<>
			<ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
			<button
				onClick={() => setModalOpen(true)}
				className='fixed bottom-8 right-8 z-50 flex items-center gap-2 bg-[rgb(var(--color-primary-600))] dark:bg-[rgb(var(--color-primary-300))] text-white dark:text-on-surface px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-primary-600))] dark:focus:ring-[rgb(var(--color-primary-300))]'
				aria-label={t('order_button')}
			>
				<PlusIcon className='h-6 w-6' />
				<span>{t('order_button')}</span>
			</button>
		</>
	);
};

export default OrderButton;
