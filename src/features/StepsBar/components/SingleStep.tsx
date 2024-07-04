interface SingleStepProps {
	step: string
	index: number
	stepNumber: number
	handleStepClick: (step: number) => void
}

const SingleStep = ({ step, index, stepNumber, handleStepClick }: SingleStepProps) => {
	return (
		<div className='h-[36px] flex flex-col justify-between grow' key={step}>
			<button
				onClick={() => handleStepClick(index + 1)}
				className={`text-center text-xs ${
					index + 1 < stepNumber ? 'text-grey-500' : index + 1 == stepNumber ? 'text-pink-intense' : ' text-grey-400'
				}`}
			>
				{step}
			</button>
			<div className={`rounded-[10px] bg-grey-300 h-[8px] ${index + 1 <= stepNumber ? 'bg-pink-intense' : ''}`}></div>
		</div>
	)
}

export default SingleStep
