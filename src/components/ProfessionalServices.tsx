import { useTranslation } from 'react-i18next';
import { EyeIcon } from '@heroicons/react/24/outline';

export type ProfessionalService = {
	name: string;
	description: string;
	price: number;
	imageKey: string;
};

interface ProfessionalServicesProps {
	services: ProfessionalService[];
	formatPrice: (price: number) => string;
	onPreview: (imageKey: string) => void;
}

const ProfessionalServices = ({
	services,
	formatPrice,
	onPreview,
}: ProfessionalServicesProps) => {
	const { t } = useTranslation();

	return (
		<section
			id='professional-services'
			className='glassmorphism rounded-xl p-6'
		>
			<h2 className='mb-2 text-2xl font-bold text-primary-600 dark:text-primary-300'>
				{t('professional_services')}
			</h2>
			{/* Subtexto bilingue abaixo do título */}
			<p className='mb-4 text-sm text-on-surface opacity-80'>
				{t('professional_services_subtext')}
			</p>
			<div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
				{services.map((service) => (
					<div
						key={service.name}
						className='glassmorphism-inner group relative rounded-lg border p-6 transition-all duration-300 hover:bg-[rgb(var(--color-surface)/0.3)] hover:shadow-lg cursor-pointer'
						onClick={() => onPreview(service.imageKey)}
						role='button'
						tabIndex={0}
						onKeyDown={(e) => e.key === 'Enter' && onPreview(service.imageKey)}
						aria-label={t('preview_service', { service: service.name })}
					>
						<div className='flex items-center gap-2'>
							<h3 className='mb-2 text-lg font-semibold text-accent-600 dark:text-accent-300'>
								{service.name}
							</h3>
							<EyeIcon className='h-5 w-5 text-accent-600 dark:text-accent-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
						</div>
						<p className='mb-4 text-sm text-on-surface opacity-80'>
							{service.description}
						</p>
						<div className='text-xl font-bold text-accent-600 dark:text-accent-300'>
							{formatPrice(service.price)}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default ProfessionalServices;
