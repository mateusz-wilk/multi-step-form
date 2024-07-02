import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { validateStep1, validateStep2, validateStep3 } from '../utils/validationUtils'

const useSurveyNavigation = () => {
	const navigate = useNavigate()

	useEffect(() => {
		const savedData = JSON.parse(localStorage.getItem('formData') || '{}')

		if (!validateStep1(savedData)) {
			navigate('/survey/step/1')
		} else if (!validateStep2(savedData)) {
			navigate('/survey/step/2')
		} else if (!validateStep3(savedData)) {
			navigate('/survey/step/3')
		}
	}, [navigate])

	return navigate
}

export default useSurveyNavigation
