import Step1Form from './components/Step1Form'

interface Step1Props {
	nextStep: () => void
}

const Step1 = ({ nextStep }: Step1Props) => {
	return <Step1Form nextStep={nextStep} />
}

export default Step1
