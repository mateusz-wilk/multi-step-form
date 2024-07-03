import { Alert, AlertTitle } from './ui/alert'

type NotificationProps = {
	alertType: 'success' | 'error'
}

const Notification = ({ alertType }: NotificationProps) => {
	return (
		<Alert
			className={`z-20 rounded-xl h-[54px] mt-[-64px] mx-[15px] flex items-center w-auto ${
				alertType === 'success'
					? 'bg-success dark:border-success-border text-success-foreground'
					: 'bg-destructive dark:border-destructive-border text-destructive-foreground'
			}`}
		>
			{alertType === 'success' ? (
				<svg
					className='!text-success-foreground'
					width='22'
					height='22'
					viewBox='0 0 24 24'
					strokeWidth='2'
					stroke='currentColor'
					fill='none'
					strokeLinecap='round'
					strokeLinejoin='round'
				>
					<path stroke='none' d='M0 0h24v24H0z' />
					<circle cx='12' cy='12' r='9' />
					<path d='M9 12l2 2l4 -4' />
				</svg>
			) : (
				<svg
					className='!text-destructive-foreground'
					width='22'
					height='22'
					viewBox='0 0 24 24'
					strokeWidth='2'
					stroke='currentColor'
					fill='none'
					strokeLinecap='round'
					strokeLinejoin='round'
				>
					<path stroke='none' d='M0 0h24v24H0z' />
					<circle cx='12' cy='12' r='9' />
					<line x1='12' y1='8' x2='12' y2='12' />
					<line x1='12' y1='16' x2='12.01' y2='16' />
				</svg>
			)}
			<AlertTitle className='mb-0 !pl-8 text-base'>
				{alertType === 'success' ? 'Dziękujemy! Otrzymaliśmy ankietę.' : 'Coś poszło nie tak! Spróbuj ponownie.'}
			</AlertTitle>
		</Alert>
	)
}

export default Notification
