import SingleStep from './components/SingleStep'
import { useStepsValidation } from './hooks/useStepsValidation'

interface StepsBarProps {
	stepNumber: number
}

const StepsBar = ({ stepNumber }: StepsBarProps) => {
	const { handleStepClick } = useStepsValidation(stepNumber)
	return (
		<div className='z-10 h-[56px] relative flex items-center px-5 gap-[10px]'>
			{['Dane', 'Dieta', 'Trening'].map((step, index) => (
				<SingleStep key={step} step={step} index={index} stepNumber={stepNumber} handleStepClick={handleStepClick} />
			))}
		</div>
	)
}

export default StepsBar
