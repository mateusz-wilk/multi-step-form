import { z } from 'zod'

export const validationStep1Schema = z.object({
	firstName: z.string().min(1, 'Imię jest wymagane'),
	lastName: z.string().min(1, 'Nazwisko jest wymagane'),
	email: z.string().email('Podany adres e-mail jest niepoprawny'),
})

export const validationStep2Schema = z.object({
	dietExp: z.enum(['inexperienced', 'beginner', 'intermediate', 'advanced'], {
		message: 'Wybierz jedną z opcji',
	}),
})

export const validationStep3Schema = z.object({
	priorityGoals: z
		.array(z.enum(['buttocks', 'thighs', 'belly', 'calves', 'arms']))
		.min(2, 'Wybierz przynajmniej dwa priorytety'),
	workoutsPlace: z.enum(['home', 'gym', 'half'], {
		message: 'Wybierz jedną z opcji',
	}),
})

export type Step1Data = z.infer<typeof validationStep1Schema>

export type Step2Data = z.infer<typeof validationStep2Schema>

export type Step3Data = z.infer<typeof validationStep3Schema>
