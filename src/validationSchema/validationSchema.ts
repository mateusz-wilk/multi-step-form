import { z } from 'zod'

export const validationDetailsSchema = z.object({
	firstName: z.string().min(1, 'Imię jest wymagane'),
	lastName: z.string().min(1, 'Nazwisko jest wymagane'),
	email: z.string().email('Podany adres e-mail jest niepoprawny'),
})

export const validationDietSchema = z.object({
	dietExp: z.enum(['inexperienced', 'beginner', 'intermediate', 'advanced'], {
		message: 'Wybierz jedną z opcji',
	}),
})

export const validationTrainingSchema = z.object({
	priorityGoals: z
		.array(z.enum(['buttocks', 'thighs', 'belly', 'calves', 'arms']))
		.min(2, 'Wybierz przynajmniej dwa priorytety'),
	workoutsPlace: z.enum(['home', 'gym', 'half'], {
		message: 'Wybierz jedną z opcji',
	}),
})

export type DetailsData = z.infer<typeof validationDetailsSchema>

export type DietData = z.infer<typeof validationDietSchema>

export type TrainingData = z.infer<typeof validationTrainingSchema>
