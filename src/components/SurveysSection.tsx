import { SurveyData } from '../api/mockApi'

interface SurveysSectionProps {
	surveys: SurveyData[] | []
}

const SurveysSection = ({ surveys }: SurveysSectionProps) => {
	return (
		<>
			<div className='flex flex-col gap-0.5'>
				<div className='text-foreground text-xl'>Ukończone ankiety:</div>
				<div className='text-grey-500 text-sm font-light'>Global state</div>
			</div>

			<div className='bg-white p-2.5 text-grey-600 text-sm tracking-normal font-medium rounded-[10px] font-mono'>
				<pre>
					{surveys.length === 0 ? (
						<p className='text-center'>Brak wysłanych ankiet</p>
					) : (
						JSON.stringify(surveys, null, 2)
					)}
				</pre>
			</div>
		</>
	)
}

export default SurveysSection
