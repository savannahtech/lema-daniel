const pageRoutes = {
	home: '',
	userPosts: (id = ':id') => `${id}/posts`,
};

export default pageRoutes;
