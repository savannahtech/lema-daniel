'use client';

import { Dot } from '@phosphor-icons/react';
import { useParams } from 'next/navigation';
import { useGetUserPosts } from '../../hooks/api-integration/tanstack/queries';
import AddPostCard from '../cards/AddPostCard';
import ErrorCard from '../cards/ErrorCard';
import PostCard from '../cards/PostCard';
import PageLayout from '../layout/templates/PageLayout';
import Loader from '../utilities/Loader';

export default function UserPosts() {
	const params = useParams();
	const id = params?.id as string;
	const { data, isLoading, error } = useGetUserPosts(id);

	if (!id) return null;

	if (isLoading || !data) return <Loader fullScreen />;

	if (error)
		return (
			<ErrorCard msg='Error fetching user posts.' subMsg={`${error}`} />
		);

	const posts = data?.posts || [];
	const user = data?.user;

	return (
		<PageLayout title={user?.name} titleSize='md'>
			<div className='text-sm flex flex-col md:flex-row items-start md:items-center'>
				<div>{user?.email}</div>
				<Dot size={20} weight='bold' className='hidden md:block' />
				<div className='font-semibold'>{posts.length} posts</div>
			</div>
			<div className='grid max-[550px]:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
				<AddPostCard userId={id} />
				{posts.map((item) => (
					<PostCard key={item.id} post={item} userId={id} />
				))}
			</div>
		</PageLayout>
	);
}
