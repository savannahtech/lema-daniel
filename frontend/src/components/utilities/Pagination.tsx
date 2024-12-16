import { ArrowLeft, ArrowRight } from '@phosphor-icons/react';
import { IPaginationProps } from '../../types/utilities.types';
import { generatePagination } from '../../utils/pagination.utils';
import Button from './Button';

const Pagination = ({
	total,
	current,
	onPageChange,
	disable,
}: IPaginationProps) => {
	const pages = generatePagination(total, current as number);

	return (
		<div
			className={`text-[#717680] text-xs lg:text-sm font-medium flex flex-col md:flex-row items-center justify-center space-x-1 md:space-x-2 ${
				disable && 'opacity-50'
			}`}
		>
			<Button
				onClick={() => onPageChange((current as number) - 1)}
				disabled={current === 1 || disable}
				iconLeft={<ArrowLeft weight='bold' />}
			>
				Previous
			</Button>

			<div className='flex items-center justify-center space-x-1 md:space-x-2'>
				{pages.map((page, index) =>
					page === '...' ? (
						<span key={index} className='px-2'>
							...
						</span>
					) : (
						<Button
							key={index}
							className={`py-1 px-2 md:py-2 md:px-4 rounded ${
								current === page
									? 'bg-[#F9F5FF] text-[#7F56D9]'
									: ''
							}`}
							onClick={() => onPageChange(page)}
							disabled={disable}
						>
							{page}
						</Button>
					)
				)}
			</div>

			<Button
				onClick={() => onPageChange((current as number) + 1)}
				disabled={current === total || disable}
				iconRight={<ArrowRight weight='bold' />}
			>
				Next
			</Button>
		</div>
	);
};

export default Pagination;
