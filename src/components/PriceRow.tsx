import { EyeIcon } from '@heroicons/react/24/outline';

type PriceRowProps = {
	label: string;
	price: number;
	format: (price: number) => string;
	note?: string;
	onPreview?: () => void;
};

const PriceRow = ({ label, price, format, note, onPreview }: PriceRowProps) => (
	<div
		className='group relative flex justify-between transition-all duration-300 p-2 -mx-2 rounded-lg hover:bg-[rgb(var(--color-surface)/0.3)] cursor-pointer'
		onClick={onPreview}
		role='button'
		tabIndex={0}
		onKeyDown={(e) => e.key === 'Enter' && onPreview?.()}
		aria-label={note ? `${label} (${note})` : label}
	>
		<div className='flex items-center'>
			<EyeIcon className='h-4 w-4 text-accent-600 dark:text-accent-300 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
			<div>
				<span className='text-on-surface'>{label}</span>
				{note && (
					<span className='ml-1 text-xs text-on-surface opacity-70'>
						({note})
					</span>
				)}
			</div>
		</div>
		<span className='font-semibold text-accent-600 dark:text-accent-300'>
			{format(price)}
		</span>
	</div>
);

export default PriceRow;
