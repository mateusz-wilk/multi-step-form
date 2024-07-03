import { UseFormRegisterReturn } from 'react-hook-form'
import { Label } from '../../../components/ui/label'
import { Input } from '../../../components/ui/input'

interface SelectableFieldProps {
	type: 'checkbox' | 'radio'
	value: string
	selected: boolean | undefined
	label: string
	register: UseFormRegisterReturn
	isSubmitting: boolean
}

const SelectableField = ({ type, value, selected, label, register, isSubmitting }: SelectableFieldProps) => {
	return (
		<Label
			className={`flex items-center bg-grey-300 h-[40px] px-[14px] py-[8px] rounded-[12px] ${
				selected && 'outline outline-2 outline-pink bg-pink-very-light'
			} ${isSubmitting && 'opacity-50'}`}
		>
			<Input type={type} value={value} {...register} className='hidden' disabled={isSubmitting} />
			<p className={`text-grey-900 text-base font-normal ${selected && 'text-pink'}`}>{label}</p>
		</Label>
	)
}

export default SelectableField
