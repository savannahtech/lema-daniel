import { ReactNode } from 'react';

export interface IRoute {
	id: number;
	title?: string;
	path?: string;
	index?: boolean;
	component: ReactNode;
	children?: IRoute[];
}
