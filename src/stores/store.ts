import { create } from 'zustand'
import { SurveyData } from '../api/mockApi'

interface SurveyStore {
	surveys: SurveyData[]
	addSurvey: (survey: SurveyData) => void
	removeLastSurvey: () => void
}

const useStore = create<SurveyStore>((set) => ({
	surveys: [],
	addSurvey: (survey: SurveyData) => set((state) => ({ surveys: [...state.surveys, survey] })),
	removeLastSurvey: () => set((state) => ({ surveys: state.surveys.slice(0, -1) })),
}))

export default useStore
