import { useEffect } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { DetailsData, validationDetailsSchema } from '../../../validationSchema/validationSchema'

export const useDetailsForm = () => {
	const {
		register,
		handleSubmit,
		setValue,
		control,
		formState: { errors },
	} = useForm<DetailsData>({
		resolver: zodResolver(validationDetailsSchema),
	})

	const formData = useWatch({ control })

	useEffect(() => {
		const savedData = JSON.parse(localStorage.getItem('formData') || '{}')
		if (!savedData.uniqueId) {
			savedData.uniqueId = new Date().valueOf()
			localStorage.setItem('formData', JSON.stringify(savedData))
		}
		setValue('firstName', savedData.firstName || '')
		setValue('lastName', savedData.lastName || '')
		setValue('email', savedData.email || '')
	}, [setValue])

	useEffect(() => {
		localStorage.setItem(
			'formData',
			JSON.stringify({ ...JSON.parse(localStorage.getItem('formData') || '{}'), ...formData }),
		)
	}, [formData])

	return { register, handleSubmit, errors }
}
