export type FieldOption<T> = {
	value: T
	label: string
}

export type DietExp = 'inexperienced' | 'beginner' | 'intermediate' | 'advanced'

export type PriorityGoals = 'buttocks' | 'thighs' | 'belly' | 'calves' | 'arms'

export type WorkoutsPlace = 'home' | 'gym' | 'half'

export type SurveyData = {
	uniqueId: number
	firstName: string
	lastName: string
	email: string
	dietExp: DietExp
	priorityGoals: PriorityGoals[]
	workoutsPlace: WorkoutsPlace
}

const validateUserData = (data: SurveyData): boolean => {
	const { firstName, lastName, email, dietExp, priorityGoals, workoutsPlace } = data

	// Simple validation
	if (
		!firstName ||
		!lastName ||
		!email.includes('@') ||
		!email.includes('.') ||
		email.length < 5 ||
		email.includes(' ')
	) {
		return false
	}

	if (!dietExp || priorityGoals.length < 2 || !workoutsPlace) {
		return false
	}

	return true
}

export const mockApi = (data: SurveyData): Promise<SurveyData> => {
	return new Promise((resolve, reject) => {
		if (validateUserData(data)) {
			setTimeout(() => {
				const successOrFail = Math.random() > 0.5 ? 'success' : 'error'

				if (successOrFail === 'error') {
					reject('error')
				}

				resolve(data)
			}, 1500)
		} else {
			setTimeout(() => reject('error'), 1000)
		}
	})
}
