import { useEffect } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { useStep1Form } from '../hooks/useStep1Form'
import { Step1Data } from '../../../schemas/schemas'
import FormField from './FormField'
import { Button } from '../../../components/Button'

interface Step1FormProps {
	nextStep: () => void
}

const Step1Form = ({ nextStep }: Step1FormProps) => {
	const { register, handleSubmit, errors } = useStep1Form()

	const onSubmit: SubmitHandler<Step1Data> = (data) => {
		const savedData = JSON.parse(localStorage.getItem('formData') || '{}')
		localStorage.setItem('formData', JSON.stringify({ ...savedData, ...data }))
		nextStep()
	}

	useEffect(() => {
		const savedData = JSON.parse(localStorage.getItem('formData') || '{}')
		if (!savedData.uniqueId) {
			savedData.uniqueId = new Date().valueOf()
			localStorage.setItem('formData', JSON.stringify(savedData))
		}
	}, [])

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='bg-white flex flex-col justify-between grow px-5 mt-[10px] rounded-t-[20px] pt-[22px] pb-[34px]'
		>
			<div className='flex flex-col gap-[20px]'>
				<h3 className='text-grey-900 text-2xl'>Podstawowe informacje:</h3>
				<FormField
					label='Imię'
					register={register('firstName')}
					errorMessage={errors.firstName ? errors.firstName.message : undefined}
				/>
				<FormField
					label='Nazwisko'
					register={register('lastName')}
					errorMessage={errors.lastName ? errors.lastName.message : undefined}
				/>
				<FormField
					label='E-mail'
					register={register('email')}
					errorMessage={errors.email ? errors.email.message : undefined}
				/>
			</div>

			<Button type='submit'>
				Dalej
				<svg
					className='ml-[10px]'
					width='20'
					height='20'
					viewBox='0 0 24 24'
					strokeWidth='2'
					stroke='currentColor'
					fill='none'
					strokeLinecap='round'
					strokeLinejoin='round'
				>
					<path stroke='none' d='M0 0h24v24H0z' /> <line x1='5' y1='12' x2='19' y2='12' />{' '}
					<line x1='13' y1='18' x2='19' y2='12' /> <line x1='13' y1='6' x2='19' y2='12' />
				</svg>
			</Button>
		</form>
	)
}

export default Step1Form
