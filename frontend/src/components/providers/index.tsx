'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NuqsAdapter } from 'nuqs/adapters/next';
import { Toaster } from 'sonner';
import { IProviderProps } from '../../types/providers.types';

const queryClient = new QueryClient();

export default function RootProvider({ children }: IProviderProps) {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<NuqsAdapter>{children}</NuqsAdapter>
			</QueryClientProvider>
			<Toaster />
		</>
	);
}
