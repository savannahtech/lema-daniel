import { Bug } from '@phosphor-icons/react';
import CardLayout from '../layout/component-layouts/CardLayout';

export default function ErrorCard({
	msg = 'Error fetching data, please check your network and refresh.',
	subMsg = '',
}) {
	return (
		<CardLayout className='border-red-400'>
			<div className='flex gap-5 items-center'>
				<Bug weight='fill' color='red' size={24} />
				<div className='flex-1 text-red-500'>
					<div className='font-semibold'>{msg}</div>
					{subMsg && <div>{subMsg}</div>}
				</div>
			</div>
		</CardLayout>
	);
}
