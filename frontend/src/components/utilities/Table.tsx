import { paginationPageSize } from '../../constants/table.constant';
import useTable from '../../hooks/component-logic/useTable';
import { IUser } from '../../types/api-responses/users.types';
import { ITableProps } from '../../types/utilities.types';
import Loader from './Loader';
import Pagination from './Pagination';

export default function Table({
	data,
	onRowClick,
	displayedFields,
	page,
	setPage,
	dataCount,
	loading,
}: ITableProps) {
	const { headRow, bodyRows } = useTable(data, onRowClick, displayedFields);
	const totalPages = dataCount / paginationPageSize - 1;
	if (
		!data ||
		!Array.isArray(data) ||
		!data.every((d) => typeof d === 'object')
	)
		return null;

	return (
		<>
			<div>
				<div className='border rounded overflow-x-auto relative'>
					{loading ? (
						<div className='h-[330px] flex items-center justify-center'>
							<Loader />
						</div>
					) : (
						<>
							<table className='text-sm w-layout text-[#535862] hidden md:table'>
								<colgroup>
									{displayedFields?.map((field, i) => (
										<col
											key={i}
											style={{
												width:
													field?.width || undefined,
											}}
										/>
									))}
								</colgroup>

								<thead className='font-medium'>{headRow}</thead>
								<tbody className=''>{bodyRows}</tbody>
							</table>
							<div className='block md:hidden'>
								{data?.map((item, i) => (
									<div
										key={i}
										className='p-4 border-b last:border-b-0 cursor-pointer'
										onClick={() =>
											onRowClick &&
											onRowClick(item as unknown as IUser)
										}
									>
										{Object.entries(item).map(
											([key, value], i) =>
												displayedFields?.some(
													(field) =>
														field.field === key
												) ? (
													<div
														key={i}
														className='flex py-1'
													>
														<span className='font-semibold capitalize'>
															{key}:{'  '}
															<span className='font-normal'>
																{value}
															</span>
														</span>
													</div>
												) : null
										)}
									</div>
								))}
							</div>
						</>
					)}
				</div>
			</div>
			<div className='py-5 flex justify-center md:justify-end'>
				<Pagination
					disable={loading}
					total={totalPages}
					current={page}
					onPageChange={setPage}
				/>
			</div>
		</>
	);
}
