import { useTranslation } from 'react-i18next';

export type AdditionalPrice = {
	name: string;
	percentage: number;
};

interface AdditionalPricesProps {
	prices: AdditionalPrice[];
}

const AdditionalPrices = ({ prices }: AdditionalPricesProps) => {
	const { t } = useTranslation();

	return (
		<section id='additional-prices' className='glassmorphism rounded-xl p-6'>
			<h2 className='mb-4 text-2xl font-bold text-primary-600 dark:text-primary-300'>
				{t('additional_prices')}
			</h2>
			<div className='grid gap-4 md:grid-cols-3'>
				{prices.map((item) => (
					<div
						key={item.name}
						className='glassmorphism-inner rounded-lg border p-6 transition-colors duration-200 hover:bg-[rgb(var(--color-surface)/0.3)]'
					>
						<div className='flex items-center justify-between'>
							<span className='text-on-surface'>{item.name}</span>
							<span className='text-xl font-bold text-accent-600 dark:text-accent-300'>
								+{item.percentage}%
							</span>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default AdditionalPrices;
