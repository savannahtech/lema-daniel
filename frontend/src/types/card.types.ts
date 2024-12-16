import { IPost } from './api-responses/posts.types';

export interface IPostCardProps {
	post: IPost;
	userId: string;
}
