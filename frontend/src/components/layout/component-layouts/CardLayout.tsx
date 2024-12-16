import { ICardLayoutProps } from '../../../types/layouts.types';
import { cardLayoutBorderType } from '../../../utils/layout.utils';

export default function CardLayout({
	children,
	borderType,
	title,
	top,
	onClick,
	className,
}: ICardLayoutProps) {
	return (
		<div
			onClick={onClick}
			className={`border border-[#D5D7DA] relative space-y-4 ${cardLayoutBorderType(
				borderType
			)} rounded-lg p-6  text-sm flex flex-col ${
				onClick ? 'cursor-pointer' : ''
			} ${className}`}
		>
			{title && <div className='text-[18px] font-medium'>{title}</div>}
			<div className={`w-full flex-1 flex flex-col overflow-hidden`}>
				{children}
			</div>
			{top && <div className='absolute -top-3 right-1'>{top}</div>}
		</div>
	);
}
