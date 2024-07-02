import { UseFormRegisterReturn } from 'react-hook-form'
import { Label } from '../../../components/ui/label'
import { Input } from '../../../components/ui/input'

interface FormFieldProps {
	label: string
	register: UseFormRegisterReturn
	errorMessage?: string
}

const FormField = ({ label, register, errorMessage }: FormFieldProps) => {
	return (
		<div className='flex flex-col gap-[10px]'>
			<Label htmlFor={register.name} className='text-grey-500 text-sm font-normal'>
				{label}
			</Label>
			<Input
				{...register}
				className='focus-visible:ring-pink-intense border-0 h-[48px] rounded-[12px] py-[10px] px-[16px] text-grey-700 text-base'
			/>
			{errorMessage && <p className='text-sm text-destructive-foreground'>{errorMessage}</p>}
		</div>
	)
}

export default FormField
