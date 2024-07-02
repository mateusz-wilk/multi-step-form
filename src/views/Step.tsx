import { useNavigate, useParams } from 'react-router-dom'
import Navigation from '../components/Navigation'
import StepsBar from '../components/StepsBar'
import Step1 from '../features/Step1/Step1'
import Step2 from '../features/Step2/Step2'
import Step3 from '../features/Step3/Step3'
import { motion, AnimatePresence } from 'framer-motion'
import useSurveyNavigation from '../hooks/useSurveyNavigation'
import AlertComponent from '../components/AlertComponent'
import { useSubmitSurvey } from '../hooks/useSubmitSurvey'

export default function Step() {
	const { stepId = '1' } = useParams<{ stepId: string }>()
	const stepNumber = parseInt(stepId)
	const navigate = useNavigate()
	const { handleSubmit, isSubmitting, alertType } = useSubmitSurvey()

	const nextStep = () => {
		const newStepNumber = stepNumber + 1
		navigate(`/survey/step/${newStepNumber}`)
	}

	useSurveyNavigation()

	return (
		<>
			<Navigation stepNumber={stepNumber} />
			<div className='realative flex-1 overflow-auto pt-[10px] flex flex-col gap-[10px]'>
				<StepsBar stepNumber={stepNumber} />

				{alertType && <AlertComponent alertType={alertType} />}

				<AnimatePresence mode='wait'>
					<motion.div
						key={stepNumber}
						initial={{ x: 100, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						exit={{ x: -100, opacity: 0 }}
						transition={{ type: 'spring', duration: 0.5 }}
						className='flex-1 overflow-auto pt-[10px] flex flex-col gap-[10px]'
					>
						{stepNumber === 1 && <Step1 nextStep={nextStep} />}
						{stepNumber === 2 && <Step2 nextStep={nextStep} />}
						{stepNumber === 3 && <Step3 handleSubmit={handleSubmit} isSubmitting={isSubmitting} />}
					</motion.div>
				</AnimatePresence>
			</div>
		</>
	)
}
