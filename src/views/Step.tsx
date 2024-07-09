import { useNavigate, useParams } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Details from '../features/Details/Details'
import Diet from '../features/Diet/Diet'
import Training from '../features/Training/Training'
import { motion, AnimatePresence } from 'framer-motion'
import useSurveyNavigation from '../hooks/useSurveyNavigation'
import Notification from '../components/Notification'
import { useSubmitSurvey } from '../hooks/useSubmitSurvey'
import StepsBar from '../features/StepsBar/StepsBar'

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
			<div className='relative flex-1 overflow-auto pt-[10px] flex flex-col gap-[10px]'>
				<StepsBar stepNumber={stepNumber} />

				{alertType && <Notification alertType={alertType} />}

				<AnimatePresence mode='wait'>
					<motion.div
						key={stepNumber}
						initial={{ x: 100, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						exit={{ x: -100, opacity: 0 }}
						transition={{ type: 'spring', duration: 0.5 }}
						className='flex-1 overflow-auto pt-[10px] flex flex-col gap-[10px]'
					>
						{stepNumber === 1 && <Details nextStep={nextStep} />}
						{stepNumber === 2 && <Diet nextStep={nextStep} />}
						{stepNumber === 3 && <Training handleSubmit={handleSubmit} isSubmitting={isSubmitting} />}
					</motion.div>
				</AnimatePresence>
			</div>
		</>
	)
}
