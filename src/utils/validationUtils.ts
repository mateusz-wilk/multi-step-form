import {
	DetailsData,
	DietData,
	TrainingData,
	validationDetailsSchema,
	validationDietSchema,
	validationTrainingSchema,
} from '../validationSchema/validationSchema'

export const validateDetails = (data: DetailsData) => {
	const result = validationDetailsSchema.safeParse(data)
	return result.success
}

export const validateDiet = (data: DietData) => {
	const result = validationDietSchema.safeParse(data)
	return result.success
}

export const validateTraining = (data: TrainingData) => {
	const result = validationTrainingSchema.safeParse(data)
	return result.success
}
