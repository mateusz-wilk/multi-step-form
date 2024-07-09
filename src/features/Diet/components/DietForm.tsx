import { SubmitHandler } from 'react-hook-form'
import { Button } from '../../../components/Button'
import { useDietForm } from '../hooks/useDietForm'
import { DietData } from '../../../validationSchema/validationSchema'
import FormField from './FormField'
import { DietExp, FieldOption } from '../../../api/mockApi'

const dietExpFields: FieldOption<DietExp>[] = [
	{ value: 'inexperienced', label: 'Nigdy nie próbowałam' },
	{ value: 'beginner', label: 'Dopiero zaczynam' },
	{ value: 'intermediate', label: 'Liczę już jakiś czas' },
	{ value: 'advanced', label: 'Jestem doświadczona' },
]
interface DietFormProps {
	nextStep: () => void
}

const DietForm = ({ nextStep }: DietFormProps) => {
	const { register, handleSubmit, errors, formData } = useDietForm()

	const onSubmit: SubmitHandler<DietData> = (data) => {
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
					{dietExpFields.map((field) => (
						<FormField
							key={field.value}
							value={field.value}
							label={field.label}
							isSelected={formData.dietExp === field.value}
							register={register('dietExp')}
						/>
					))}
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

export default DietForm
