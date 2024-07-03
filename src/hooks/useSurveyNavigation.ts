import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { validateDetails, validateDiet, validateTraining } from '../utils/validationUtils'

const useSurveyNavigation = () => {
	const navigate = useNavigate()

	useEffect(() => {
		const savedData = JSON.parse(localStorage.getItem('formData') || '{}')

		if (!validateDetails(savedData)) {
			navigate('/survey/step/1')
		} else if (!validateDiet(savedData)) {
			navigate('/survey/step/2')
		} else if (!validateTraining(savedData)) {
			navigate('/survey/step/3')
		}
	}, [navigate])

	return navigate
}

export default useSurveyNavigation
