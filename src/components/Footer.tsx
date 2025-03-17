// src/components/Footer.tsx
import {
	HeartIcon,
	EnvelopeIcon,
	ArrowUpIcon,
} from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

const Footer = () => {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const { t } = useTranslation();

	return (
		<footer className='glassmorphism border-t border-surface/20 py-8'>
			<div className='mx-auto max-w-6xl px-4'>
				<div className='flex flex-col items-center justify-between gap-4 md:flex-row'>
					{/* Copyright */}
					<div className='flex items-center gap-2 text-sm text-on-surface/80'>
						<span>© {new Date().getFullYear()} Marcy Paint</span>
						<HeartIcon
							className='h-4 w-4 text-accent-600 dark:text-accent-300 animate-pulse'
							aria-hidden='true'
						/>
					</div>

					{/* Social Links */}
					<div className='flex flex-wrap justify-center gap-4'>
						<a
							href='https://bsky.app/profile/marcypaint.bsky.social'
							target='_blank'
							rel='noopener noreferrer'
							aria-label='Marcy Paint on Bluesky'
							className='flex items-center gap-2 transition-all duration-300 transform hover:scale-105 text-on-surface hover:text-primary-600 dark:hover:text-accent-300 focus:outline-none focus:ring-2 focus:ring-primary-600 dark:focus:ring-accent-300'
						>
							<svg
								className='h-5 w-5'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
							>
								<path
									fill='none'
									stroke='currentColor'
									stroke-linecap='round'
									stroke-linejoin='round'
									stroke-width='1.5'
									d='m2.753 4.514l.434 5.853a3.354 3.354 0 0 0 3.345 3.106h.702l-.51.291a5.94 5.94 0 0 0-2.447 2.677a2.655 2.655 0 0 0 .74 3.17l.972.787c1.226.994 3 1.236 4.085.089c.92-.974 1.32-1.914 1.405-2.128q.018-.046.032-.093l.295-.924c.111-.347.176-.707.194-1.07c.018.363.083.723.194 1.07l.295.924q.014.047.032.093c.084.214.486 1.154 1.405 2.128c1.084 1.147 2.859.906 4.085-.088l.971-.788a2.655 2.655 0 0 0 .741-3.17a5.94 5.94 0 0 0-2.447-2.676l-.51-.292h.702a3.354 3.354 0 0 0 3.345-3.106l.434-5.853c.101-1.363-1.373-2.25-2.5-1.477c-1.726 1.18-3.77 2.698-4.565 3.754c-1.41 1.872-2.117 3.559-2.182 3.719c-.065-.16-.772-1.847-2.182-3.72c-.795-1.055-2.84-2.573-4.564-3.754c-1.128-.772-2.602.115-2.5 1.478'
								/>
							</svg>
							<span>Bluesky</span>
						</a>

						<a
							href='https://www.furaffinity.net/user/marcypaint'
							target='_blank'
							rel='noopener noreferrer'
							aria-label='Marcy Paint on FurAffinity'
							className='flex items-center gap-2 transition-all duration-300 transform hover:scale-105 text-on-surface hover:text-primary-600 dark:hover:text-accent-300 focus:outline-none focus:ring-2 focus:ring-primary-600 dark:focus:ring-accent-300'
						>
							<svg
								className='h-5 w-5'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								id='furaffinity'
								fill='currentColor'
							>
								<path d='M23.374,12.152C23.377,11.378,23.424,7.009,24,5h-7.178l-0.26,2.031l2.435,0.731l0.031,2.194l2.231,0.042l-0.056,2.299L23.374,12.152z' />
								<path d='M4.089,18.447c0-0.076,0.002-0.153,0.005-0.228v0.011c0.148-3.736,4.199-4.377,7.241-4.286v-1.076c-0.05-0.869-0.74-1.636-2.74-1.636c-1.333,0-2.915,0.174-3.939,0.551l0.272-2.43c0.978-0.282,2.08-0.555,4.453-0.555c4.572,0,5.077,2.068,5.04,4.468l-0.021,5.733h2.575c3.303,0,6.021-2.744,6.362-6.029l-2.947,0.117H20.39l0.052-2.29l-2.202-0.041l-0.035-2.472l-2.527-0.878L16.016,5h-9.43C2.767,5,0,8.315,0,11.949v7.05h4.116C4.099,18.834,4.089,18.642,4.089,18.447z' />
								<path d='M11.356,18.361c0.056-0.217,0-0.924,0-1.168l-0.049-1.491c-2.021-0.087-4.2,0.328-4.2,2.229c0,0.411,0.169,0.783,0.426,1.069h3.312C11.093,18.855,11.28,18.658,11.356,18.361z' />
							</svg>

							<span>FurAffinity</span>
						</a>

						<a
							href='https://twitter.com/marcypaint'
							target='_blank'
							rel='noopener noreferrer'
							aria-label='Marcy Paint on Twitter'
							className='flex items-center gap-2 transition-all duration-300 transform hover:scale-105 text-on-surface hover:text-primary-600 dark:hover:text-accent-300 focus:outline-none focus:ring-2 focus:ring-primary-600 dark:focus:ring-accent-300'
						>
							<svg
								className='h-5 w-5'
								fill='currentColor'
								viewBox='0 0 24 24'
								aria-hidden='true'
							>
								<path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
							</svg>
							<span>Twitter</span>
						</a>

						<a
							href='https://ko-fi.com/marcypaint'
							target='_blank'
							rel='noopener noreferrer'
							aria-label='Support Marcy Paint on Ko-fi'
							className='flex items-center gap-2 transition-all duration-300 transform hover:scale-105 text-on-surface hover:text-primary-600 dark:hover:text-accent-300 focus:outline-none focus:ring-2 focus:ring-primary-600 dark:focus:ring-accent-300'
						>
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
							<span>Ko-fi</span>
						</a>

						<button
							onClick={() => navigator.clipboard.writeText('marcythany')}
							aria-label='Copy Discord ID'
							title='Clique para copiar'
							className='flex items-center gap-2 transition-all duration-300 transform hover:scale-105 text-on-surface hover:text-primary-600 dark:hover:text-accent-300 focus:outline-none focus:ring-2 focus:ring-primary-600 dark:focus:ring-accent-300'
						>
							<svg
								className='h-5 w-5'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
							>
								<g fill='none'>
									<path d='m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z' />
									<path
										fill='currentColor'
										d='M15.003 4c.259 0 .584.068.845.132c.91.22 1.989.493 2.755 1.068c.713.535 1.267 1.468 1.695 2.416c.89 1.975 1.509 4.608 1.723 6.61c.102.95.127 1.906-.056 2.549c-.09.316-.285.554-.422.7c-.418.443-.956.774-1.488 1.075l-.264.149a25 25 0 0 1-.525.284l-.522.27l-.717.357l-.577.284a1 1 0 0 1-1.166-1.59l-.434-.868A13 13 0 0 1 12 18c-1.37 0-2.677-.2-3.85-.564l-.433.866a1 1 0 0 1-1.164 1.592l-.544-.27c-.604-.298-1.208-.596-1.796-.925c-.614-.343-1.265-.708-1.752-1.225a1.74 1.74 0 0 1-.422-.7c-.184-.642-.158-1.597-.057-2.548c.214-2.002.833-4.635 1.724-6.61c.427-.948.981-1.881 1.694-2.416c.766-.575 1.845-.848 2.755-1.068C8.416 4.068 8.74 4 9 4a1 1 0 0 1 .99 1.147A14 14 0 0 1 12 5c.691 0 1.366.05 2.014.148A1 1 0 0 1 15.004 4Zm1.354 2.363c-.15-.048-.186-.027-.24.063l-.062.112a1.515 1.515 0 0 1-1.635.716A11.4 11.4 0 0 0 12 7c-.852 0-1.667.09-2.42.254a1.515 1.515 0 0 1-1.635-.716l-.062-.111c-.053-.09-.089-.111-.238-.064c-.356.113-.738.234-1.045.437c-.287.215-.67.75-1.071 1.639c-.766 1.697-1.366 4.204-1.558 6q-.06.57-.066.972v.294q.007.267.035.422c.254.248.568.443.883.622l.682.377l.446.235l.364-.728a1 1 0 0 1 1.133-1.624C8.664 15.62 10.246 16 12 16s3.336-.382 4.552-.99a1 1 0 0 1 1.213 1.538l-.08.085l.364.73q.447-.233.897-.483c.39-.216.8-.443 1.117-.753q.027-.155.035-.422v-.294a11 11 0 0 0-.066-.973c-.192-1.795-.792-4.302-1.558-6c-.4-.888-.784-1.423-1.07-1.638c-.308-.203-.69-.324-1.047-.437M8.75 10.5a1.75 1.75 0 1 1 0 3.5a1.75 1.75 0 0 1 0-3.5m6.5 0a1.75 1.75 0 1 1 0 3.5a1.75 1.75 0 0 1 0-3.5'
									/>
								</g>
							</svg>
							<span>Discord</span>
						</button>

						<a
							href='mailto:marcythany@gmail.com'
							aria-label='Send email to Marcy Paint'
							className='flex items-center gap-2 transition-all duration-300 transform hover:scale-105 text-on-surface hover:text-primary-600 dark:hover:text-accent-300 focus:outline-none focus:ring-2 focus:ring-primary-600 dark:focus:ring-accent-300'
						>
							<EnvelopeIcon className='h-5 w-5' aria-hidden='true' />
							<span>Email</span>
						</a>
					</div>
				</div>

				{/* Back to Top Button */}
				<div className='mt-8 flex justify-center'>
					<button
						onClick={scrollToTop}
						aria-label={t('back_top')}
						className='flex items-center gap-2 px-4 py-2 rounded-md border border-surface/20 bg-surface/50 backdrop-blur-sm text-on-surface transition-all duration-300 hover:bg-surface hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-600 dark:focus:ring-accent-300'
					>
						<ArrowUpIcon className='h-5 w-5' aria-hidden='true' />
						<span>{t('back_top')}</span>
					</button>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
