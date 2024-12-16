export default {
	success: {
		fetchedPosts: 'Successfully fetched posts.',
		deletedPosts: 'Successfully deleted posts.',
		createdPosts: 'Successfully created posts.',
		fetchedUsers: 'Successfully fetched users.',
		fetchedCount: 'Successfully fetched posts count.',
	},
	error: {
		missingUserId: 'User ID is required.',
		missingPostId: 'Post ID is required.',
		missingCreatePostField: (missingField: string) =>
			`${missingField} is required.`,
		invalidPageNumber: 'Invalid page number or page size',
	},
};
