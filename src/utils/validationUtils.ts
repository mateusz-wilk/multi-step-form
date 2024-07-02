import {
	Step1Data,
	Step2Data,
	Step3Data,
	validationStep1Schema,
	validationStep2Schema,
	validationStep3Schema,
} from '../schemas/schemas'

export const validateStep1 = (data: Step1Data) => {
	const result = validationStep1Schema.safeParse(data)
	return result.success
}

export const validateStep2 = (data: Step2Data) => {
	const result = validationStep2Schema.safeParse(data)
	return result.success
}

export const validateStep3 = (data: Step3Data) => {
	const result = validationStep3Schema.safeParse(data)
	return result.success
}
