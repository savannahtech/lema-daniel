import { UseQueryOptions } from '@tanstack/react-query';

export interface RequestParams {
	data?: any;
	token?: string;
	url?: string;
	showError?: boolean;
	formDataReq?: boolean;
	auth?: boolean;
	headers?: Object;
}

export interface MakeRequestInterface {
	method: string;
	params: RequestParams;
	defaultUrl?: string;
	customErrorHandler?: (_: string) => void;
	useBaseUrl?: boolean;
}

export interface ResponseInterface {
	success: boolean;
	message: string;
	data: any;
}

export interface UseRequestOptions {
	url?: string;
	useBaseUrl?: boolean;
	handleError?: (_: string) => void;
}

export type UseRequestArg = string | UseRequestOptions;

export interface QueryWrapperHookOptions<T>
	extends Omit<UseQueryOptions<T>, 'queryKey' | 'queryFn'> {}

export type TCustomError = {
	response?: {
		data?: {
			message?: string;
		};
		message?: string;
	};
};
