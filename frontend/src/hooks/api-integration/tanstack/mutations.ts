import { useMutation } from '@tanstack/react-query';
import endpoints from '../../../constants/endpoints.constant';
import {
	createPostKey,
	deletePostKey,
} from '../../../constants/keys.constants';
import { queryFnWrapper } from '../../../utils/api-integration.utils';
import useRequest from '../../useRequest';

export function useDeletePost(id: string, onSuccess: () => void) {
	const { deleteReq } = useRequest(endpoints.deletePost(id));
	return useMutation({
		mutationKey: deletePostKey,
		mutationFn: async () =>
			await queryFnWrapper(() =>
				deleteReq({
					data: {
						postId: id,
					},
				})
			),
		onSuccess: () => {
			onSuccess && onSuccess();
		},
	});
}

export function useCreatePost(onSuccess: () => void) {
	const { post } = useRequest(endpoints.createPost);
	return useMutation({
		mutationKey: createPostKey,
		mutationFn: async (data) =>
			await queryFnWrapper(() =>
				post({
					data,
				})
			),
		onSuccess: () => {
			onSuccess && onSuccess();
		},
	});
}
