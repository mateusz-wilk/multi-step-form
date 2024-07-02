import { SurveyData } from '../../api/mockApi'
import Step3Form from './components/Step3Form'

interface Step3Props {
	handleSubmit: (data: SurveyData) => void
	isSubmitting: boolean
}

const Step3 = ({ handleSubmit, isSubmitting }: Step3Props) => {
	return <Step3Form handleSubmit={handleSubmit} isSubmitting={isSubmitting} />
}

export default Step3
