import { paginationPageSize } from '@/constants/table.constant';

const endpoints = {
	users: (page: number, pageSize: number) =>
		`/users?pageNumber=${page}&pageSize=${pageSize}`,
	usersInternal: (page: number) =>
		`api/users?pageNumber=${page}&pageSize=${paginationPageSize}`,
	usersCount: '/users/count',
	userPosts: (userId: string) => `/posts?userId=${userId}`,
	deletePost: (id: string) => `/posts?postId=${id}`,
	createPost: `/posts`,
};

export default endpoints;
