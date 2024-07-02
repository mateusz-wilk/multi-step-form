import { useNavigate } from 'react-router-dom'
import Task from '../components/Task'
import { Button } from '../components/Button'
import { Separator } from '../components/Separator'
import useStore from '../stores/store'
import { useEffect, useState } from 'react'
import { SurveyData } from '../api/mockApi'
import DraftSection from '../components/DraftSection'
import SurveysSection from '../components/SurveysSection'

export default function App() {
	const navigate = useNavigate()
	const { surveys, removeLastSurvey } = useStore()
	const [savedFormData, setSavedFormData] = useState<SurveyData | null>(null)

	useEffect(() => {
		const formData = JSON.parse(localStorage.getItem('formData') || '{}')
		if (Object.keys(formData).length > 0) {
			setSavedFormData(formData)
		}
	}, [])

	return (
		<>
			<div className='z-10 bg-white h-[62px] relative flex items-center px-5'>
				<span className='text-2xl text-foreground'>
					<span className='text-pink-intense'>Zadanie</span> rekrutacyjne
				</span>
				<div className='h-[1px] absolute bottom-0 inset-x-0 bg-border' />
			</div>

			<div className='flex-1 overflow-auto py-7 px-5 gap-5 flex flex-col'>
				<div className='flex flex-col gap-1'>
					<div className='text-foreground text-xl'>Autor:</div>
					<div className='text-pink-intense text-lg'>Mateusz Wilk</div>
				</div>

				<Separator />

				<div className='text-foreground text-xl'>Formularz:</div>
				<Button onClick={() => navigate(`/survey/step/1`)}>Wypełnij ankietę</Button>
				<Button variant={'secondary'} disabled={surveys.length === 0} onClick={removeLastSurvey}>
					Usuń ostatnią
				</Button>

				<Separator />

				<DraftSection savedFormData={savedFormData} />

				<Separator />

				<SurveysSection surveys={surveys} />

				<Separator />

				<Task />
			</div>
		</>
	)
}
