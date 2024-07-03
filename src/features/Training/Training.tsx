import { SurveyData } from '../../api/mockApi'
import TrainingForm from './components/TrainingForm'

interface TrainingProps {
	handleSubmit: (data: SurveyData) => void
	isSubmitting: boolean
}

const Training = ({ handleSubmit, isSubmitting }: TrainingProps) => {
	return <TrainingForm handleSubmit={handleSubmit} isSubmitting={isSubmitting} />
}

export default Training
