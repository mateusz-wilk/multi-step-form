import DietForm from './components/DietForm'

interface DietProps {
	nextStep: () => void
}

const Diet = ({ nextStep }: DietProps) => {
	return <DietForm nextStep={nextStep} />
}

export default Diet
