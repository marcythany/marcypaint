import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { InformationCircleIcon } from '@heroicons/react/24/outline';
import { ImageModal } from './ImageModal';
import SimpleServices, { PriceTier } from './SimpleServices';
import ProfessionalServices, {
	ProfessionalService,
} from './ProfessionalServices';
import AdditionalPrices, { AdditionalPrice } from './AdditionalPrices';
import PaymentMethods, { PaymentMethod } from './PaymentMethods';

// Ícones extraídos para constantes (evita duplicação de código)
const PixIcon = (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='24'
		height='24'
		viewBox='0 0 24 24'
	>
		<path
			fill='currentColor'
			fill-rule='evenodd'
			d='M19.777 8.738c.361.361.693.693.948.994c.275.323.546.706.705 1.194a3.47 3.47 0 0 1 0 2.147c-.159.489-.43.872-.705 1.195c-.255.3-.587.633-.948.994l-4.515 4.515a18 18 0 0 1-.994.948c-.323.275-.707.546-1.195.705a3.48 3.48 0 0 1-2.147 0c-.488-.159-.87-.43-1.195-.705c-.3-.255-.632-.587-.993-.948l-4.515-4.515a18 18 0 0 1-.948-.994c-.275-.323-.546-.706-.705-1.195a3.47 3.47 0 0 1 0-2.147c.159-.488.43-.87.705-1.194c.254-.3.586-.633.948-.994l4.515-4.515c.361-.361.693-.693.993-.948c.324-.275.707-.546 1.195-.705a3.47 3.47 0 0 1 2.147 0c.489.159.872.43 1.195.705c.3.255.632.586.994.948zm-2.343-.237l1.253 1.253c.787.786 1.18 1.18 1.327 1.633c.13.398.13.828 0 1.226c-.147.454-.54.847-1.327 1.633l-1.253 1.253h-1.513a.8.8 0 0 1-.598-.28l-1.946-2.14a1.86 1.86 0 0 0-2.754 0l-1.947 2.14a.8.8 0 0 1-.597.28H6.565l-1.253-1.253c-.786-.786-1.179-1.18-1.326-1.633a2 2 0 0 1 0-1.226c.147-.454.54-.847 1.326-1.633l1.253-1.253H8.08c.209 0 .426.09.597.28l1.947 2.14a1.86 1.86 0 0 0 2.754 0l1.946-2.14a.8.8 0 0 1 .598-.28zm-1.489-1.489h-.024c-.652 0-1.262.286-1.7.767L12.276 9.92a.37.37 0 0 1-.55 0L9.778 7.78a2.3 2.3 0 0 0-1.7-.768h-.024l1.7-1.7c.786-.786 1.18-1.179 1.632-1.326c.4-.13.829-.13 1.227 0c.454.147.847.54 1.633 1.327zm-.024 9.976h.024l-1.7 1.7c-.785.786-1.178 1.179-1.632 1.326c-.398.13-.828.13-1.227 0c-.453-.147-.846-.54-1.632-1.327l-1.7-1.7h.025c.652 0 1.261-.285 1.699-.766l1.947-2.141a.37.37 0 0 1 .55 0l1.947 2.14a2.3 2.3 0 0 0 1.7.768'
			clip-rule='evenodd'
		/>
	</svg>
);

const PaypalIcon = (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='24'
		height='24'
		viewBox='0 0 24 24'
	>
		<g
			fill='none'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth='1.5'
			color='currentColor'
		>
			<path d='M6.294 4.835L4.165 17.671c-.18 1.081-.269 1.622.03 1.975c.297.354.842.354 1.933.354h.402c.823 0 1.234 0 1.515-.244c.28-.245.339-.654.455-1.473l.468-3.29c.037-.26.055-.39.084-.501a1.99 1.99 0 0 1 1.697-1.479c.113-.013.244-.013.505-.013h1.162a6.636 6.636 0 0 0 6.464-5.186C19.554 4.836 17.302 2 14.263 2h-4.64c-1.114 0-1.67 0-2.11.235c-.25.134-.47.32-.642.547c-.303.397-.394.949-.577 2.053' />
			<path d='m8.243 19.5l-.228 1.332c-.105.61.37 1.168.996 1.168h1.99c.495 0 .917-.354.998-.836l.73-4.329c.08-.482.503-.835.997-.835h1.803c2.581 0 4.816-1.773 5.376-4.265C21.297 9.99 20.444 8.31 19 7.5' />
		</g>
	</svg>
);

const KoFiIcon = (
	<svg
		className='h-5 w-5'
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 24 24'
	>
		<path
			fill='currentColor'
			d='M11.351 2.715c-2.7 0-4.986.025-6.83.26C2.078 3.285 0 5.154 0 8.61c0 3.506.182 6.13 1.585 8.493c1.584 2.701 4.233 4.182 7.662 4.182h.83c4.209 0 6.494-2.234 7.637-4a9.5 9.5 0 0 0 1.091-2.338C21.792 14.688 24 12.22 24 9.208v-.415c0-3.247-2.13-5.507-5.792-5.87c-1.558-.156-2.65-.208-6.857-.208m0 1.947c4.208 0 5.09.052 6.571.182c2.624.311 4.13 1.584 4.13 4v.39c0 2.156-1.792 3.844-3.87 3.844h-.935l-.156.649c-.208 1.013-.597 1.818-1.039 2.546c-.909 1.428-2.545 3.064-5.922 3.064h-.805c-2.571 0-4.831-.883-6.078-3.195c-1.09-2-1.298-4.155-1.298-7.506c0-2.181.857-3.402 3.012-3.714c1.533-.233 3.559-.26 6.39-.26m6.547 2.287c-.416 0-.65.234-.65.546v2.935c0 .311.234.545.65.545c1.324 0 2.051-.754 2.051-2s-.727-2.026-2.052-2.026m-10.39.182c-1.818 0-3.013 1.48-3.013 3.142c0 1.533.858 2.857 1.949 3.897c.727.701 1.87 1.429 2.649 1.896a1.47 1.47 0 0 0 1.507 0c.78-.467 1.922-1.195 2.623-1.896c1.117-1.039 1.974-2.364 1.974-3.897c0-1.662-1.247-3.142-3.039-3.142c-1.065 0-1.792.545-2.338 1.298c-.493-.753-1.246-1.298-2.312-1.298'
		/>
	</svg>
);

const PriceTable = () => {
	const { t, i18n } = useTranslation();
	const [selectedImage, setSelectedImage] = useState<string | null>(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const isPortuguese = i18n.language === 'pt';
	const currentCurrency = isPortuguese ? 'BRL' : 'USD';
	const conversionRate = 5;

	// Função para formatação de preços
	const formatPrice = (price: number) =>
		new Intl.NumberFormat(i18n.language, {
			style: 'currency',
			currency: currentCurrency,
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		}).format(isPortuguese ? price * conversionRate : price);

	// Função para abertura do modal com a imagem selecionada
	const handleImageSelect = (imageKey: string) => {
		setSelectedImage(imageKey ? `/examples/${imageKey}.jpg` : null);
		setIsModalOpen(true);
	};

	// Dados para Serviços Simples
	const simpleServices: PriceTier[] = [
		{
			tier: t('sketch'),
			bust: 20,
			halfBody: 40,
			fullBody: 60,
			pet: 20,
			chibi: 15,
		},
		{
			tier: t('flats'),
			bust: 30,
			halfBody: 50,
			fullBody: 80,
			pet: 30,
			chibi: 20,
		},
		{
			tier: t('complete'),
			bust: 40,
			halfBody: 60,
			fullBody: 90,
			pet: 40,
			chibi: 30,
		},
	];

	// Dados para Serviços Profissionais
	const professionalServices: ProfessionalService[] = [
		{
			name: t('concept_art'),
			description: t('concept_art_desc'),
			price: 36,
			imageKey: 'concept-art',
		},
		{
			name: t('character_design'),
			description: t('character_design_desc'),
			price: 90,
			imageKey: 'character-design',
		},
		{
			name: t('full_illustration'),
			description: t('full_illustration_desc'),
			price: 140,
			imageKey: 'full-illustration',
		},
	];

	// Dados para Preços Adicionais
	const additionalPrices: AdditionalPrice[] = [
		{ name: t('additional_char'), percentage: 50 },
		{ name: t('additional_pet'), percentage: 50 },
		{ name: t('complex_bg'), percentage: 30 },
	];

	// Dados para Métodos de Pagamento – eliminando duplicação
	const basePaymentMethods: PaymentMethod[] = [
		{
			label: 'Paypal',
			copyValue: 'marcel.sobral.br@gmail.com',
			icon: PaypalIcon,
		},
		{
			label: 'Ko‑fi',
			copyValue: 'https://ko-fi.com/marcypaint',
			icon: KoFiIcon,
		},
	];
	const paymentMethods: PaymentMethod[] = isPortuguese
		? [
				{
					label: 'Pix',
					copyValue: 'marcythany@gmail.com',
					icon: PixIcon,
				},
				...basePaymentMethods,
		  ]
		: basePaymentMethods;

	return (
		<div className='space-y-8'>
			<ImageModal
				isOpen={isModalOpen}
				onClose={() => {
					setIsModalOpen(false);
					setSelectedImage(null);
				}}
				src={selectedImage}
				alt={t('example_image')}
			/>

			<SimpleServices
				services={simpleServices}
				formatPrice={formatPrice}
				onPreview={handleImageSelect}
			/>

			<ProfessionalServices
				services={professionalServices}
				formatPrice={formatPrice}
				onPreview={handleImageSelect}
			/>

			<AdditionalPrices prices={additionalPrices} />

			<PaymentMethods methods={paymentMethods} />

			<div className='glassmorphism flex items-start gap-2 rounded-lg p-4'>
				<InformationCircleIcon className='h-6 w-6 flex-shrink-0 text-accent-600 dark:text-accent-300' />
				<div className='space-y-2'>
					<p className='text-primary-600 dark:text-primary-300'>
						{t('price_disclaimer')}
					</p>
					<p className='text-sm text-on-surface opacity-80'>
						* {t('discount_note')}
					</p>
				</div>
			</div>
		</div>
	);
};

export default PriceTable;
