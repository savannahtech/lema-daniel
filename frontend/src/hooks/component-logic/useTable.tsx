import _ from 'lodash'; // Importing Lodash for string manipulation
import { ReactNode } from 'react'; // Importing ReactNode for typing
import { TDisplayedFields } from '../../types/utilities.types';
import { filterFields } from '../../utils/table.utils';

/**
 * Hook to generate table rows and headers
 * @param data - Array of objects to be used as table data
 * @returns An object containing the table body rows and the table head row
 */
export default function useTable(
	data: Record<string, string>[] = [],
	onRowClick?: Function | ((_: (typeof data)[0]) => void),
	displayedFields?: TDisplayedFields[]
) {
	const filteredData = filterFields(displayedFields, data);

	/**
	 * Function to generate a table row
	 * @param key - Unique key for the row
	 * @param child - ReactNode to be rendered within the row
	 * @param isBodyRow - Boolean indicating if the row is a body row (default: true)
	 * @param arg - Refers to the data for that row.
	 * @returns A JSX element representing a table row
	 */
	function returnTableRow(
		key: string | number,
		child: ReactNode,
		isBodyRow: boolean = true // Default value for isBodyRow
	) {
		const shouldAttachClickHandler = isBodyRow && onRowClick;
		const arg = data.find((_, i) => i === key);

		return (
			<tr
				onClick={
					shouldAttachClickHandler
						? () => onRowClick(arg as (typeof data)[0])
						: undefined
				}
				className={`${
					isBodyRow ? 'h-[72px] hover:bg-black/[0.015]' : 'h-11'
				} ${shouldAttachClickHandler ? 'cursor-pointer' : ''} ${
					isBodyRow && key !== data?.length - 1 ? 'border-b' : ''
				} smooth`} // Conditional styling for body rows
				key={key}
			>
				{child}
			</tr>
		);
	}

	/**
	 * Contains the generated body rows
	 * @returns An array of JSX elements representing the body rows of the table
	 */
	const bodyRows = filteredData.map((item, i) => {
		const rowData = Object.values(item); // Extracting values from each data item
		return returnTableRow(
			i,
			rowData.map((r, i) => (
				<td
					key={i}
					className={`py-5 pl-5 ${i === 0 ? 'font-medium' : ''}`}
				>
					{r}
				</td>
			)),
			true // Indicating it's a body row
		);
	});

	/**
	 * Contains the generated head row
	 * @returns A JSX element representing the head row of the table
	 */
	const headRow = returnTableRow(
		'head',
		filteredData.length
			? Object.keys(filteredData[0]).map((item) => (
					<td key={item} className='text-xs px-5'>
						{/**Creating table data cells for the head row */}
						{_.startCase(item)}
					</td>
			  ))
			: null,
		false // Indicating it's not a body row
	);

	return {
		bodyRows,
		headRow,
	};
}
