import DetailsForm from './components/DetailsForm'

interface DetailsProps {
	nextStep: () => void
}

const Details = ({ nextStep }: DetailsProps) => {
	return <DetailsForm nextStep={nextStep} />
}

export default Details
