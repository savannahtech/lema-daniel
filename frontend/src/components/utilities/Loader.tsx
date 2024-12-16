'use client';
import { ReactNode, useEffect, useState } from 'react';
import { ILoaderProps } from '../../types/utilities.types';

export default function Loader({ fullScreen, className }: ILoaderProps) {
	const [root, setRoot] = useState<HTMLBodyElement | null>(null);
	function wrapLoader(child: ReactNode) {
		if (fullScreen)
			return (
				<div className='w-screen h-screen bg-white fixed top-0 bottom-0 left-0 right-0 z-[9999]'>
					{child}
				</div>
			);
		return <div>{child}</div>;
	}

	useEffect(() => {
		setRoot(document.getElementsByTagName('body')[0]);
	}, []);

	return wrapLoader(
		<div
			className={`flex justify-center items-center w-full h-full  animate__animated animate__fadeIn animate__slower ${className}`}
		>
			<div className='lds-ellipsis'>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
}
