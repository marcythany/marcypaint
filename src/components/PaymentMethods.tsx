import React from 'react';
import { useTranslation } from 'react-i18next';

export type PaymentMethod = {
	label: string;
	copyValue: string;
	icon: React.ReactNode;
};

interface PaymentMethodsProps {
	methods: PaymentMethod[];
}

const PaymentMethods = ({ methods }: PaymentMethodsProps) => {
	const { t, i18n } = useTranslation();
	const isPortuguese = i18n.language === 'pt';
	const gridCols = isPortuguese ? 'md:grid-cols-3' : 'md:grid-cols-2';

	return (
		<section id='payment' className='glassmorphism rounded-xl p-6'>
			<h2 className='mb-4 text-2xl font-bold text-primary-600 dark:text-primary-300'>
				{t('payment_methods') || 'Payment Methods'}
			</h2>
			<div className={`grid gap-4 ${gridCols}`}>
				{methods.map((method) => (
					<button
						key={method.label}
						onClick={() => navigator.clipboard.writeText(method.copyValue)}
						className='glassmorphism-inner rounded-lg border p-6 transition-all duration-200 hover:bg-[rgb(var(--color-surface)/0.3)] text-on-surface focus:outline-none focus:ring-2 focus:ring-primary-600 dark:focus:ring-accent-300'
						aria-label={`${method.label} - ${method.copyValue}`}
					>
						<div className='flex items-center gap-2'>
							{method.icon}
							<span>{method.label}</span>
						</div>
					</button>
				))}
			</div>
		</section>
	);
};

export default PaymentMethods;
