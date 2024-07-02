import Step2Form from './components/Step2Form'

interface Step2Props {
	nextStep: () => void
}

const Step2 = ({ nextStep }: Step2Props) => {
	return <Step2Form nextStep={nextStep} />
}

export default Step2
