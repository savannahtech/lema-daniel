import UserDetailsLayout from '@/components/layout/templates/UserDetailsLayout';
import { ReactNode } from 'react';

export default function layout({ children }: { children: ReactNode }) {
	return <UserDetailsLayout>{children}</UserDetailsLayout>;
}
