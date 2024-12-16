import { createPortal } from 'react-dom';
import { ModalLayoutProps } from '../../../types/layouts.types';
import { modalLayoutSize } from '../../../utils/layout.utils';
import Button from '../../utilities/Button';

export default function ModalLayout({
	title,
	open,
	setOpen,
	children,
	showCancel,
	confirmButtonText,
	size = 'md',
	confirmButtonFn,
	confirmButtonLoading,
}: ModalLayoutProps) {
	if (!open) return null;
	return createPortal(
		<div
			onClick={() => setOpen && setOpen(false)}
			className='bg-black/20 top-0 left-0 right-0 bottom-0 fixed z-[99999] animate__animated animate__fadeIn'
		>
			<div
				className={`flex flex-col gap-y-6 p-3 absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 bg-primary rounded-lg border border-highlight animate__animated animate__zoomIn bg-white ${modalLayoutSize(
					size
				)}`}
				onClick={(e) => {
					e.preventDefault();
					e.stopPropagation();
				}}
			>
				{title && <div className='text-4xl'>{title}</div>}
				{children}
				{(showCancel || confirmButtonText) && (
					<div className='flex justify-end gap-x-5'>
						{showCancel && (
							<Button
								variant='outline'
								onClick={() => setOpen && setOpen(false)}
							>
								Cancel
							</Button>
						)}
						{confirmButtonText && (
							<Button
								variant='primary'
								onClick={() =>
									confirmButtonFn && confirmButtonFn()
								}
								loading={confirmButtonLoading}
							>
								{confirmButtonText}
							</Button>
						)}
					</div>
				)}
			</div>
		</div>,
		document.getElementsByTagName('body')[0]
	);
}
