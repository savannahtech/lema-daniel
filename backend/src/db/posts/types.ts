import { User } from '../users/types';

export interface Post {
	id: number;
	user_id: number;
	title: string;
	body: string;
	created_at: string;
}

export interface PostResponse {
	user: User;
	posts: Post[];
}
