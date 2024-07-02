import { SubmitHandler } from 'react-hook-form'
import { Button } from '../../../components/Button'
import { useStep2Form } from '../hooks/useStep2Form'
import { Step2Data } from '../../../schemas/schemas'
import FormField from './FormField'

interface Step2FormProps {
	nextStep: () => void
}

const Step2Form = ({ nextStep }: Step2FormProps) => {
	const { register, handleSubmit, errors, formData } = useStep2Form()

	const onSubmit: SubmitHandler<Step2Data> = (data) => {
		const savedData = JSON.parse(localStorage.getItem('formData') || '{}')
		localStorage.setItem('formData', JSON.stringify({ ...savedData, ...data }))
		nextStep()
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className=' flex flex-col justify-between grow px-5 pt-[22px] pb-[34px] mt-[10px]'
		>
			<div className='flex flex-col gap-[10px]'>
				<h3 className='text-grey-900 text-2xl text-center'>
					Jakie jest Twoje doświadczenie <br />z dietą i liczeniem kalorii?
				</h3>
				<p className='text-grey-700 text-sm text-center mt-[15px]'>Wybierz jedną z opcji</p>

				<div className='flex flex-col gap-[10px] py-[10px]'>
					<FormField
						label='Nigdy nie próbowałam'
						value='inexperienced'
						isSelected={formData.dietExp === 'inexperienced'}
						register={register('dietExp')}
					/>
					<FormField
						label='Dopiero zaczynam'
						value='beginner'
						isSelected={formData.dietExp === 'beginner'}
						register={register('dietExp')}
					/>
					<FormField
						label='Liczę już jakiś czas'
						value='intermediate'
						isSelected={formData.dietExp === 'intermediate'}
						register={register('dietExp')}
					/>
					<FormField
						label='Jestem doświadczona'
						value='advanced'
						isSelected={formData.dietExp === 'advanced'}
						register={register('dietExp')}
					/>
					{errors.dietExp && <p className='text-sm text-destructive-foreground'>{errors.dietExp.message}</p>}
				</div>
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

export default Step2Form