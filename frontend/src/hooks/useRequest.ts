import {
	RequestParams,
	UseRequestArg,
	UseRequestOptions,
} from '../types/api-integration.types';

import { makeRequest } from '../utils/api-integration.utils';

export default function useRequest(arg: UseRequestArg = '') {
	const defaultUrl = typeof arg === 'string' ? arg : arg.url;

	return {
		post: (params: RequestParams | {} = {}) =>
			makeRequest({
				method: 'POST',
				params,
				defaultUrl,
				useBaseUrl: (arg as UseRequestOptions)?.useBaseUrl,
			}),
		get: (params: RequestParams | {} = {}) =>
			makeRequest({
				method: 'GET',
				params,
				defaultUrl,
				useBaseUrl: (arg as UseRequestOptions)?.useBaseUrl,
			}),
		patch: (params: RequestParams | {} = {}) =>
			makeRequest({
				method: 'PATCH',
				params,
				defaultUrl,
				useBaseUrl: (arg as UseRequestOptions)?.useBaseUrl,
			}),
		put: (params: RequestParams | {} = {}) =>
			makeRequest({
				method: 'PUT',
				params,
				defaultUrl,
				useBaseUrl: (arg as UseRequestOptions)?.useBaseUrl,
			}),
		deleteReq: (params: RequestParams | {} = {}) =>
			makeRequest({
				method: 'DELETE',
				params,
				defaultUrl,
				useBaseUrl: (arg as UseRequestOptions)?.useBaseUrl,
			}),
	};
}
