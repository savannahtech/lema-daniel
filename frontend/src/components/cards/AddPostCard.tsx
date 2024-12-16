import { PlusCircle } from '@phosphor-icons/react';
import { useState } from 'react';
import CardLayout from '../layout/component-layouts/CardLayout';
import AddPostModal from '../modals/AddPostModal';

export default function AddPostCard({ userId }: { userId: string }) {
	const [showNewPost, setShowNewPost] = useState(false);
	return (
		<>
			<CardLayout
				className='hover:shadow smooth-sm'
				borderType='dashed'
				onClick={() => setShowNewPost(true)}
			>
				<div className='w-full h-full flex flex-col items-center justify-center font-semibold'>
					<PlusCircle weight='bold' size={20} />
					<div>New Post</div>
				</div>
			</CardLayout>
			<AddPostModal
				open={showNewPost}
				setOpen={setShowNewPost}
				userId={userId}
			/>
		</>
	);
}
