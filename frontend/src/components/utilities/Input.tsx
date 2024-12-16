import { IInputProps } from '../../types/utilities.types';

export default function Input({
	className = '',
	label = '',
	...props
}: IInputProps) {
	return (
		<div>
			{label && <label className='text-[18px]'>{label}</label>}
			<input
				className={`box-border flex items-center px-4 py-2.5 h-10 w-full bg-white border border-gray-200 rounded-md flex-none self-stretch focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
				{...props}
			/>
		</div>
	);
}
