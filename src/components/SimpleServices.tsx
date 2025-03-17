import { useTranslation } from 'react-i18next';
import PriceRow from './PriceRow';

export type PriceTier = {
	tier: string;
	bust: number;
	halfBody: number;
	fullBody: number;
	pet: number;
	chibi: number;
};

interface SimpleServicesProps {
	services: PriceTier[];
	formatPrice: (price: number) => string;
	onPreview: (imageKey: string) => void;
}

const SimpleServices = ({
	services,
	formatPrice,
	onPreview,
}: SimpleServicesProps) => {
	const { t } = useTranslation();

	return (
		<section id='simple-services' className='glassmorphism rounded-xl p-6'>
			<h2 className='mb-4 text-2xl font-bold text-primary-600 dark:text-primary-300'>
				{t('simple_services')}
			</h2>
			<div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
				{services.map((tier) => (
					<div
						key={tier.tier}
						className='glassmorphism-inner rounded-lg border p-6'
					>
						<h3 className='mb-4 text-lg font-semibold text-[rgb(var(--color-accent))]'>
							{tier.tier}
						</h3>
						<div className='space-y-3'>
							<PriceRow
								label={t('bust')}
								price={tier.bust}
								format={formatPrice}
								onPreview={() => onPreview(`bust-${tier.tier.toLowerCase()}`)}
							/>
							<PriceRow
								label={t('half_body')}
								price={tier.halfBody}
								format={formatPrice}
								onPreview={() =>
									onPreview(`half_body-${tier.tier.toLowerCase()}`)
								}
							/>
							<PriceRow
								label={t('full_body')}
								price={tier.fullBody}
								format={formatPrice}
								onPreview={() =>
									onPreview(`full_body-${tier.tier.toLowerCase()}`)
								}
							/>
							<PriceRow
								label={t('pet_drawing')}
								price={tier.pet}
								format={formatPrice}
								onPreview={() =>
									onPreview(`pet_drawing-${tier.tier.toLowerCase()}`)
								}
							/>
							<PriceRow
								label={t('chibi')}
								price={tier.chibi}
								format={formatPrice}
								note={t('chibi_note')}
								onPreview={() => onPreview(`chibi-${tier.tier.toLowerCase()}`)}
							/>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default SimpleServices;
