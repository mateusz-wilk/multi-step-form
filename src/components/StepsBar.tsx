type StepsBarProps = {
	stepNumber: number
}

const StepsBar = ({ stepNumber }: StepsBarProps) => {
	return (
		<div className='z-10 h-[56px] relative flex items-center px-5 gap-[10px]'>
			{['Dane', 'Dieta', 'Trening'].map((step, index) => (
				<div className='h-[36px] flex flex-col justify-between grow' key={step}>
					<p
						className={`text-center text-xs ${
							index + 1 < stepNumber
								? 'text-grey-500'
								: index + 1 == stepNumber
								? 'text-pink-intense'
								: ' text-grey-400'
						}`}
					>
						{step}
					</p>
					<div
						className={`rounded-[10px] bg-grey-300 h-[8px] ${index + 1 <= stepNumber ? 'bg-pink-intense' : ''}`}
					></div>
				</div>
			))}
		</div>
	)
}

export default StepsBar
