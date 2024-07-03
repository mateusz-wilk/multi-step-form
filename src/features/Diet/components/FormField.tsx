import React from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import { Input } from '../../../components/ui/input'
import { Label } from '../../../components/ui/label'

interface FormFieldProps {
	label: string
	value: string
	isSelected: boolean
	register: UseFormRegisterReturn
}

const FormField: React.FC<FormFieldProps> = ({ label, value, isSelected, register }) => {
	return (
		<Label
			className={`flex flex-row items-center justify-between bg-white h-[56px] px-5 py-[10px] rounded-[12px] ${
				isSelected && 'outline outline-2 outline-pink-intense'
			}`}
		>
			<Input type='radio' value={value} {...register} className='hidden' />
			<p className='text-grey-900 text-base font-normal'>{label}</p>
			<svg
				className={`!text-pink-intense ${isSelected ? 'block' : 'hidden'}`}
				width='22'
				height='22'
				viewBox='0 0 24 24'
				strokeWidth='2'
				stroke='currentColor'
				fill='none'
				strokeLinecap='round'
				strokeLinejoin='round'
			>
				<path stroke='none' d='M0 0h24v24H0z' />
				<circle cx='12' cy='12' r='9' />
				<path d='M9 12l2 2l4 -4' />
			</svg>
		</Label>
	)
}

export default FormField
