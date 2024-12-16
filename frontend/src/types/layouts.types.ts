import { Dispatch, ReactNode, SetStateAction } from 'react';

export type TTitleSize = 'lg' | 'md';
export interface IPageLayout {
	children?: ReactNode;
	title?: string;
	titleSize?: TTitleSize;
}

export type TCardBorderTypes = 'dotted' | 'solid' | 'dashed';
export interface ICardLayoutProps {
	children?: ReactNode;
	top?: ReactNode;
	borderType?: TCardBorderTypes;
	title?: string;
	onClick?: () => void;
	className?: string;
}

export type TModalLayoutSizes = 'md' | 'sm';
export interface ModalLayoutProps {
	children?: ReactNode;
	open?: boolean;
	setOpen?: ((_: boolean) => void) | Dispatch<SetStateAction<boolean>>;
	title?: string;
	size?: TModalLayoutSizes;
	showCancel?: boolean;
	confirmButtonText?: string;
	confirmButtonFn?: Function | (() => void);
	confirmButtonLoading?: boolean;
}

export interface DeleteModalLayoutProps extends ModalLayoutProps {
	id: string;
	userId: string;
}

export interface AddPostModalLayoutProps extends ModalLayoutProps {
	userId: string;
}
