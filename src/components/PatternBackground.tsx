import React from 'react';

const PatternBackground = () => {
	return (
		<svg
			className='absolute inset-0 w-full h-full'
			xmlns='http://www.w3.org/2000/svg'
			width='100%'
			preserveAspectRatio='none'
		>
			<defs>
				<linearGradient
					id='a'
					gradientUnits='userSpaceOnUse'
					x1='0'
					x2='0'
					y1='0'
					y2='100%'
					gradientTransform='rotate(240)'
				>
					{/* Usa a cor de fundo do tema para o stop inicial e a cor de acento para o final */}
					<stop offset='0' stop-color='rgb(var(--color-background))' />
					<stop
						offset='1'
						stop-color='rgb(var(--color-accent-400, 49 151 149))'
					/>
				</linearGradient>
				<pattern
					id='b'
					patternUnits='userSpaceOnUse'
					width='540'
					height='450'
					x='0'
					y='0'
					viewBox='0 0 1080 900'
				>
					<g fillOpacity='0.1'>
						<polygon
							fill='rgb(var(--color-primary-800))'
							points='90 150 0 300 180 300'
						/>
						<polygon
							fill='rgb(var(--color-surface))'
							points='90 150 180 0 0 0'
						/>
						<polygon
							fill='rgb(var(--color-primary-300))'
							points='270 150 360 0 180 0'
						/>
						<polygon
							fill='rgb(var(--color-surface))'
							points='450 150 360 300 540 300'
						/>
						<polygon
							fill='rgb(var(--color-primary-600))'
							points='450 150 540 0 360 0'
						/>
						<polygon
							fill='rgb(var(--color-surface))'
							points='630 150 540 300 720 300'
						/>
						<polygon
							fill='rgb(var(--color-surface))'
							points='630 150 720 0 540 0'
						/>
						<polygon
							fill='rgb(var(--color-primary-800))'
							points='810 150 720 300 900 300'
						/>
						<polygon
							fill='rgb(var(--color-background))'
							points='810 150 900 0 720 0'
						/>
						<polygon
							fill='rgb(var(--color-surface))'
							points='990 150 900 300 1080 300'
						/>
						<polygon
							fill='rgb(var(--color-primary-800))'
							points='990 150 1080 0 900 0'
						/>
						<polygon
							fill='rgb(var(--color-surface))'
							points='90 450 0 600 180 600'
						/>
						<polygon
							fill='rgb(var(--color-surface))'
							points='90 450 180 300 0 300'
						/>
						<polygon
							fill='rgb(var(--color-accent-600))'
							points='270 450 180 600 360 600'
						/>
						<polygon
							fill='rgb(var(--color-primary-300))'
							points='270 450 360 300 180 300'
						/>
						<polygon
							fill='rgb(var(--color-surface))'
							points='450 450 360 600 540 600'
						/>
						<polygon
							fill='rgb(var(--color-primary-600))'
							points='450 450 540 300 360 300'
						/>
						<polygon
							fill='rgb(var(--color-primary-600))'
							points='630 450 540 600 720 600'
						/>
						<polygon
							fill='rgb(var(--color-background))'
							points='630 450 720 300 540 300'
						/>
						<polygon
							fill='rgb(var(--color-surface))'
							points='810 450 720 600 900 600'
						/>
						<polygon
							fill='rgb(var(--color-surface))'
							points='810 450 900 300 720 300'
						/>
						<polygon
							fill='rgb(var(--color-primary-300))'
							points='990 450 900 600 1080 600'
						/>
						<polygon
							fill='rgb(var(--color-primary-800))'
							points='990 450 1080 300 900 300'
						/>
						<polygon
							fill='rgb(var(--color-on-surface))'
							points='90 750 0 900 180 900'
						/>
						<polygon
							fill='rgb(var(--color-surface))'
							points='270 750 180 900 360 900'
						/>
						<polygon
							fill='rgb(var(--color-surface))'
							points='270 750 360 600 180 600'
						/>
						<polygon
							fill='rgb(var(--color-surface))'
							points='450 750 540 600 360 600'
						/>
						<polygon
							fill='rgb(var(--color-surface))'
							points='630 750 540 900 720 900'
						/>
						<polygon
							fill='rgb(var(--color-primary-800))'
							points='630 750 720 600 540 600'
						/>
						<polygon
							fill='rgb(var(--color-primary-300))'
							points='810 750 720 900 900 900'
						/>
						<polygon
							fill='rgb(var(--color-accent-600))'
							points='810 750 900 600 720 600'
						/>
						<polygon
							fill='rgb(var(--color-primary-600))'
							points='990 750 900 900 1080 900'
						/>
						<polygon
							fill='rgb(var(--color-primary-600))'
							points='180 0 90 150 270 150'
						/>
						<polygon
							fill='rgb(var(--color-primary-800))'
							points='360 0 270 150 450 150'
						/>
						<polygon
							fill='rgb(var(--color-background))'
							points='540 0 450 150 630 150'
						/>
						<polygon
							fill='rgb(var(--color-surface))'
							points='900 0 810 150 990 150'
						/>
						<polygon
							fill='rgb(var(--color-on-surface))'
							points='0 300 -90 450 90 450'
						/>
						<polygon
							fill='rgb(var(--color-background))'
							points='0 300 90 150 -90 150'
						/>
						<polygon
							fill='rgb(var(--color-background))'
							points='180 300 90 450 270 450'
						/>
						<polygon
							fill='rgb(var(--color-accent-600))'
							points='180 300 270 150 90 150'
						/>
						<polygon
							fill='rgb(var(--color-on-surface))'
							points='360 300 270 450 450 450'
						/>
						<polygon
							fill='rgb(var(--color-background))'
							points='360 300 450 150 270 150'
						/>
						<polygon
							fill='rgb(var(--color-primary-800))'
							points='540 300 450 450 630 450'
						/>
						<polygon
							fill='rgb(var(--color-on-surface))'
							points='540 300 630 150 450 150'
						/>
						<polygon
							fill='rgb(var(--color-primary-300))'
							points='720 300 630 450 810 450'
						/>
						<polygon
							fill='rgb(var(--color-accent-600))'
							points='720 300 810 150 630 150'
						/>
						<polygon
							fill='rgb(var(--color-background))'
							points='900 300 810 450 990 450'
						/>
						<polygon
							fill='rgb(var(--color-primary-600))'
							points='900 300 990 150 810 150'
						/>
						<polygon
							fill='rgb(var(--color-surface))'
							points='0 600 -90 750 90 750'
						/>
						<polygon
							fill='rgb(var(--color-accent-600))'
							points='0 600 90 450 -90 450'
						/>
						<polygon
							fill='rgb(var(--color-primary-300))'
							points='180 600 90 750 270 750'
						/>
						<polygon
							fill='rgb(var(--color-primary-800))'
							points='180 600 270 450 90 450'
						/>
						<polygon
							fill='rgb(var(--color-primary-800))'
							points='360 600 270 750 450 750'
						/>
						<polygon
							fill='rgb(var(--color-primary-600))'
							points='360 600 450 450 270 450'
						/>
						<polygon
							fill='rgb(var(--color-accent-600))'
							points='540 600 630 450 450 450'
						/>
						<polygon
							fill='rgb(var(--color-on-surface))'
							points='720 600 630 750 810 750'
						/>
						<polygon
							fill='rgb(var(--color-background))'
							points='900 600 810 750 990 750'
						/>
						<polygon
							fill='rgb(var(--color-on-surface))'
							points='900 600 990 450 810 450'
						/>
						<polygon
							fill='rgb(var(--color-surface))'
							points='0 900 90 750 -90 750'
						/>
						<polygon
							fill='rgb(var(--color-primary-800))'
							points='180 900 270 750 90 750'
						/>
						<polygon
							fill='rgb(var(--color-background))'
							points='360 900 450 750 270 750'
						/>
						<polygon
							fill='rgb(var(--color-primary-300))'
							points='540 900 630 750 450 750'
						/>
						<polygon
							fill='rgb(var(--color-background))'
							points='720 900 810 750 630 750'
						/>
						<polygon
							fill='rgb(var(--color-on-surface))'
							points='900 900 990 750 810 750'
						/>
						<polygon
							fill='rgb(var(--color-on-surface))'
							points='1080 300 990 450 1170 450'
						/>
						<polygon
							fill='rgb(var(--color-background))'
							points='1080 300 1170 150 990 150'
						/>
						<polygon
							fill='rgb(var(--color-accent-600))'
							points='1080 600 1170 450 990 450'
						/>
						<polygon
							fill='rgb(var(--color-surface))'
							points='1080 900 1170 750 990 750'
						/>
					</g>
				</pattern>
			</defs>
			<rect x='0' y='0' fill='url(#a)' width='100%' height='100%' />
			<rect x='0' y='0' fill='url(#b)' width='100%' height='100%' />
		</svg>
	);
};

export default PatternBackground;
