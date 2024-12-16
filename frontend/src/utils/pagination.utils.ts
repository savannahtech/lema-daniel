/**
 * Function to generate pagination pages for a given total number of pages and current page.
 * @param total - The total number of pages.
 * @param current - The current page.
 * @returns An array of page numbers and '...' to depict undisplayed numbers.
 */
export const generatePagination = (total: number, current: number) => {
	let pages: (string | number)[] = [];

	if (total <= 7) {
		// Show all pages if total <= 7
		for (let i = 1; i <= total; i++) {
			pages.push(i);
		}
	} else {
		// Generate an array of page numbers from 1 to total
		pages = Array.from({ length: total }, (_, i) => i + 1)
			// Map each page number to either itself or '...' based on conditions
			.map((p, i) =>
				// Show the current page, its neighbors, and the first, second, last, second last, and third last pages
				p === current ||
				p === current - 1 ||
				p === current + 1 ||
				[0, 1, 2, total - 3, total - 2, total - 1, total].includes(i)
					? p
					: '...'
			)
			// Reduce the array to remove consecutive '...' and leading/trailing '...'
			.reduce((acc: (string | number)[], current: number | string) => {
				if (
					acc.length === 0 ||
					acc[acc.length - 1] !== '...' ||
					current !== '...'
				) {
					acc.push(current);
				}
				return acc;
			}, []);
	}

	return pages;
};
