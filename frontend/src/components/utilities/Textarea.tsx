import { ITextareaProps } from '../../types/utilities.types';

export default function Textarea({
	className = '',
	label = '',
	rows = 5,
	...props
}: ITextareaProps) {
	return (
		<div>
			{label && <label className='text-[18px]'>{label}</label>}
			<textarea
				className={`box-border flex items-center px-4 py-2.5 w-full bg-white border border-gray-200 rounded-md flex-none self-stretch focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${className}`}
				rows={rows}
				{...props}
			/>
		</div>
	);
}
