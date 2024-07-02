import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'

export default function NotFound() {
	const navigate = useNavigate()

	return (
		<div className='flex flex-col grow align-center justify-center px-5'>
			<h3 className='text-grey-900 text-2xl text-center mb-10'>Nie ma takiej strony</h3>
			<Button onClick={() => navigate(`/`)}>Wróć</Button>
		</div>
	)
}
