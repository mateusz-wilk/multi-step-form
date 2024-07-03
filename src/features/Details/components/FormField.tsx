import { FieldError, UseFormRegisterReturn } from 'react-hook-form'
import { Label } from '../../../components/ui/label'
import { Input } from '../../../components/ui/input'

interface FormFieldProps {
	label: string
	register: UseFormRegisterReturn
	fieldError?: FieldError
}

const FormField = ({ label, register, fieldError }: FormFieldProps) => {
	return (
		<div className='flex flex-col gap-[10px]'>
			<Label htmlFor={register.name} className='text-grey-500 text-sm font-normal'>
				{label}
			</Label>
			<Input
				{...register}
				className='focus-visible:ring-pink-intense border-0 h-[48px] rounded-[12px] py-[10px] px-[16px] text-grey-700 text-base'
			/>
			{fieldError && <p className='text-sm text-destructive-foreground'>{fieldError.message}</p>}
		</div>
	)
}

export default FormField
