import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import useStore from '../stores/store'
import { SurveyData, mockApi } from '../api/mockApi'

export const useSubmitSurvey = () => {
	const navigate = useNavigate()
	const { addSurvey } = useStore()
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [alertType, setAlertType] = useState<'success' | 'error' | null>(null)

	const mutation = useMutation({
		mutationFn: async (data: SurveyData) => {
			setIsSubmitting(true)
			return await mockApi(data)
		},
		onSuccess: (data: SurveyData) => {
			addSurvey(data)
			localStorage.clear()
			setAlertType('success')
			setTimeout(() => {
				setIsSubmitting(false)
				setAlertType(null)
				navigate('/')
			}, 3000)
		},
		onError: () => {
			setAlertType('error')
			setTimeout(() => {
				setIsSubmitting(false)
				setAlertType(null)
			}, 3000)
		},
	})

	const handleSubmit = (data: SurveyData) => {
		mutation.mutate(data)
	}

	return { handleSubmit, isSubmitting, alertType }
}
