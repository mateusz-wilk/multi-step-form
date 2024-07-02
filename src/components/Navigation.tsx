import { useNavigate } from 'react-router-dom'

interface NavigationProps {
	stepNumber: number
}

const Navigation = ({ stepNumber }: NavigationProps) => {
	const prevStep = stepNumber - 1
	const navigate = useNavigate()

	const handleBackClick = () => {
		if (prevStep > 0) {
			navigate(`/survey/step/${prevStep}`)
		} else {
			navigate('/')
		}
	}
	return (
		<div className='z-10 bg-white h-[62px] relative flex items-center px-5'>
			<div className='flex flex-auto justify-between'>
				<button onClick={handleBackClick} className='flex items-center h-[24px] hover:text-pink-intense'>
					<svg
						width='24'
						height='24'
						viewBox='0 0 24 24'
						strokeWidth='2'
						stroke='currentColor'
						fill='none'
						strokeLinecap='round'
						strokeLinejoin='round'
					>
						<path stroke='none' d='M0 0h24v24H0z' /> <line x1='5' y1='12' x2='19' y2='12' />{' '}
						<line x1='5' y1='12' x2='11' y2='18' /> <line x1='5' y1='12' x2='11' y2='6' />
					</svg>
				</button>
				<h2 className='text-lg text-foreground'>Ankieta</h2>
				<div className='w-[24px] h-[24px]'></div>
			</div>
			<div className='h-[1px] absolute bottom-0 inset-x-0 bg-border' />
		</div>
	)
}

export default Navigation
