export default function AppLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className='w-layout max-w-[100vw] mx-auto my-32 px-5 lg:px-0'>
			{/* <div className='w-layout max-w-[100vw] mx-auto my-32 max-[600px]:px-5 px-32 lg:px-0'> */}
			{children}
		</div>
	);
}
