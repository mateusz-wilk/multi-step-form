import { SubmitHandler } from 'react-hook-form'
import { Button } from '../../../components/Button'
import { useTrainingForm } from '../hooks/useTrainingForm'
import { TrainingData } from '../../../validationSchema/validationSchema'
import { FieldOption, PriorityGoals, SurveyData, WorkoutsPlace } from '../../../api/mockApi'
import SelectableField from './SelectableField'

const priorityGoalsFields: FieldOption<PriorityGoals>[] = [
	{ value: 'buttocks', label: 'Pośladki' },
	{ value: 'thighs', label: 'Uda' },
	{ value: 'belly', label: 'Brzuch' },
	{ value: 'calves', label: 'Łydki' },
	{ value: 'arms', label: 'Ramiona' },
]

const workoutPlacesFields: FieldOption<WorkoutsPlace>[] = [
	{ value: 'home', label: 'W domu' },
	{ value: 'gym', label: 'Na siłowni' },
	{ value: 'half', label: 'Pół na pół' },
]

interface TrainingFormProps {
	handleSubmit: (data: SurveyData) => void
	isSubmitting: boolean
}

const TrainingForm = ({ handleSubmit, isSubmitting }: TrainingFormProps) => {
	const { register, handleSubmit: formSubmit, formData, errors } = useTrainingForm()

	const onSubmit: SubmitHandler<TrainingData> = (data) => {
		const savedData = JSON.parse(localStorage.getItem('formData') || '{}')
		const finalData = { ...savedData, ...data }
		localStorage.setItem('formData', JSON.stringify(finalData))
		handleSubmit(finalData)
	}

	return (
		<form onSubmit={formSubmit(onSubmit)} className=' flex flex-col justify-between grow pt-[22px] pb-[34px] mt-[10px]'>
			<div className='flex flex-col gap-[10px]'>
				<div>
					<h3 className='text-grey-900 text-2xl text-center mb-[30px]'>Priorytety</h3>
					<h5 className='text-grey-700 text-base mb-[6px] px-5'>Na których partiach najmocniej Ci zależy?</h5>
					<p className='text-grey-700 text-sm mb-[16px] px-5'>Wybierz 2 lub więcej</p>
					<div className=' mb-[20px]'>
						<div className='flex flex-row items-center h-[44px] gap-[10px] px-5 overflow-x-auto no-scrollbar'>
							{priorityGoalsFields.map((field) => (
								<SelectableField
									key={field.value}
									type='checkbox'
									value={field.value}
									selected={formData.priorityGoals?.includes(field.value)}
									label={field.label}
									register={register('priorityGoals')}
									isSubmitting={isSubmitting}
								/>
							))}
						</div>
						{errors.priorityGoals && (
							<p className='text-sm text-destructive-foreground mt-[10px] px-5'>{errors.priorityGoals.message}</p>
						)}
					</div>
				</div>
				<div>
					<h3 className='text-grey-900 text-2xl text-center mb-[30px]'>Miejsce</h3>
					<h5 className='text-grey-700 text-base mb-[16px]  px-5'>Gdzie chciałabyś trenować?</h5>
					<div>
						<div className='flex flex-row items-center h-[44px] gap-[10px] px-5 overflow-x-auto no-scrollbar'>
							{workoutPlacesFields.map((field) => (
								<SelectableField
									key={field.value}
									type='radio'
									value={field.value}
									selected={formData.workoutsPlace === field.value}
									label={field.label}
									register={register('workoutsPlace')}
									isSubmitting={isSubmitting}
								/>
							))}
						</div>
						{errors.workoutsPlace && (
							<p className='text-sm text-destructive-foreground mt-[10px] px-5'>{errors.workoutsPlace.message}</p>
						)}
					</div>
				</div>
			</div>
			<div className='px-5'>
				<Button type='submit' disabled={isSubmitting}>
					{isSubmitting ? (
						'Wysyłanie...'
					) : (
						<>
							Wyślij ankietę
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
						</>
					)}
				</Button>
			</div>
		</form>
	)
}

export default TrainingForm
