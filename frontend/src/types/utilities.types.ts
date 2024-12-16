import {
	ButtonHTMLAttributes,
	Dispatch,
	InputHTMLAttributes,
	ReactNode,
	SetStateAction,
	TextareaHTMLAttributes,
} from 'react';
import { IUser } from './api-responses/users.types';

export type TDisplayedFields = {
	field: keyof IUser;
	width: string | number;
};
export interface ITableProps {
	data: Record<string, string>[];
	dataCount: number;
	page: number | string;
	setPage:
		| ((_: number | string) => void)
		| Dispatch<SetStateAction<string | number>>;
	onRowClick?: Function | ((_: IUser) => void);
	displayedFields?: TDisplayedFields[];
	loading: boolean;
}

export interface IPaginationProps {
	total: number;
	current: string | number;
	onPageChange: (_: number | string) => void;
	disable: boolean;
}

export type TButtonVariant = 'primary' | 'outline' | 'naked';
export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: TButtonVariant;
	iconLeft?: ReactNode;
	iconRight?: ReactNode;
	loading?: boolean;
}

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
}

export interface ITextareaProps
	extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	label?: string;
}

export interface ILoaderProps {
	fullScreen?: boolean;
	className?: string;
}
