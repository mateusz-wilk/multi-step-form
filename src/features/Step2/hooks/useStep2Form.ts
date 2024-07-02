import { useEffect } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Step2Data, validationStep2Schema } from '../../../schemas/schemas'

export const useStep2Form = () => {
	const {
		register,
		handleSubmit,
		setValue,
		control,
		formState: { errors },
	} = useForm<Step2Data>({
		resolver: zodResolver(validationStep2Schema),
	})

	const formData = useWatch({ control })

	useEffect(() => {
		const savedData = JSON.parse(localStorage.getItem('formData') || '{}')
		setValue('dietExp', savedData.dietExp || '')
	}, [setValue])

	useEffect(() => {
		localStorage.setItem(
			'formData',
			JSON.stringify({ ...JSON.parse(localStorage.getItem('formData') || '{}'), ...formData }),
		)
	}, [formData])

	return { register, handleSubmit, errors, formData }
}
