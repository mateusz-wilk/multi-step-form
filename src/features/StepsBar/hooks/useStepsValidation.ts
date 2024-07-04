import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { validateDetails, validateDiet } from '../../../utils/validationUtils'

export const useStepsValidation = (stepNumber: number) => {
	const navigate = useNavigate()

	const validateForm = () => {
		const savedData = JSON.parse(localStorage.getItem('formData') || '{}')
		const detailsValid = validateDetails(savedData)
		const dietValid = validateDiet(savedData)

		return { detailsValid, dietValid }
	}

	const handleStepClick = (step: number) => {
		const { detailsValid, dietValid } = validateForm()

		if (step === 1) {
			navigate('/survey/step/1')
		} else if (step === 2 && detailsValid) {
			navigate('/survey/step/2')
		} else if (step === 3 && detailsValid && dietValid) {
			navigate('/survey/step/3')
		}
	}

	useEffect(() => {
		validateForm()
	}, [stepNumber])

	return {
		handleStepClick,
	}
}
