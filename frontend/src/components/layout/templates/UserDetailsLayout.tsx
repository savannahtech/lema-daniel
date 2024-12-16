'use client';

import { ArrowLeft } from '@phosphor-icons/react';
import { useRouter } from 'next/navigation';
import Button from '../../utilities/Button';

export default function UserDetailsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const router = useRouter();
	return (
		<div>
			<Button
				iconLeft={<ArrowLeft weight='bold' />}
				onClick={() => router.back()}
			>
				Back to Users
			</Button>
			{children}
		</div>
	);
}
