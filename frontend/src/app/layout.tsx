import RootProvider from '@/components/providers';
import 'animate.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'LEMA.AI Frontend Assessment Test',
	description: 'By Don Daniel',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${inter.variable} antialiased`}>
				<RootProvider>
					<div className='w-layout max-w-[100vw] mx-auto my-32 px-5 lg:px-0'>
						{children}
					</div>
				</RootProvider>
			</body>
		</html>
	);
}
