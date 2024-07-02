import { useEffect } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Step3Data, validationStep3Schema } from '../../../schemas/schemas'

export const useStep3Form = () => {
	const {
		register,
		handleSubmit,
		setValue,
		control,
		formState: { errors },
	} = useForm<Step3Data>({
		resolver: zodResolver(validationStep3Schema),
	})

	const formData = useWatch({ control })

	useEffect(() => {
		const savedData = JSON.parse(localStorage.getItem('formData') || '{}')
		setValue('priorityGoals', savedData.priorityGoals || [])
		setValue('workoutsPlace', savedData.workoutsPlace || '')
	}, [setValue])

	useEffect(() => {
		localStorage.setItem(
			'formData',
			JSON.stringify({ ...JSON.parse(localStorage.getItem('formData') || '{}'), ...formData }),
		)
	}, [formData])

	return {
		register,
		handleSubmit,
		setValue,
		control,
		formData,
		errors,
	}
}
