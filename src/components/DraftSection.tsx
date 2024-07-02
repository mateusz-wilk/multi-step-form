import { SurveyData } from '../api/mockApi'

interface DraftSectionProps {
	savedFormData: SurveyData | null
}

const DraftSection = ({ savedFormData }: DraftSectionProps) => {
	return (
		<>
			<div className='flex flex-col gap-0.5'>
				<div className='text-foreground text-xl'>Wersja robocza:</div>
				<div className='text-grey-500 text-sm font-light'>Local storage</div>
			</div>
			<div className='bg-white p-2.5 text-grey-600 text-sm tracking-normal font-medium rounded-[10px] font-mono'>
				{savedFormData ? (
					<div>
						<pre>{JSON.stringify(savedFormData, null, 2)}</pre>
					</div>
				) : (
					<pre>
						<p className='text-center'>Brak wersji roboczej</p>
					</pre>
				)}
			</div>
		</>
	)
}

export default DraftSection
