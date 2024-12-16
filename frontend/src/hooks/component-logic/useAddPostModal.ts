import { useQueryClient } from '@tanstack/react-query';
import { Dispatch, SetStateAction, useState } from 'react';
import { toast } from 'sonner';
import { userPostsKey } from '../../constants/keys.constants';
import { useCreatePost } from '../api-integration/tanstack/mutations';

export default function useAddPostModal(
	userId: string,
	setOpen?: ((_: boolean) => void) | Dispatch<SetStateAction<boolean>>
) {
	const [formData, setFormData] = useState({
		title: '',
		body: '',
	});
	const queryClient = useQueryClient();
	const { mutate, isPending } = useCreatePost(() => {
		setOpen && setOpen(false);
		queryClient.invalidateQueries({
			queryKey: userPostsKey(userId),
		});
		setFormData({
			title: '',
			body: '',
		});
	});
	function handleSetFormData(key: string, data: string) {
		setFormData((prev) => ({
			...prev,
			[key]: data,
		}));
	}
	function handleAdd() {
		if (!formData.title || !formData.body)
			return toast(
				'You need to fill the form completely before submitting.'
			);
		if (formData?.title?.length <= 5)
			return toast('Post title must be greater than 5 characters.');
		if (formData?.body?.length <= 5)
			return toast('Post body must be greater than 5 characters.');
		mutate({
			userId,
			...formData,
		} as unknown as void);
	}

	return {
		formData,
		isPending,
		handleSetFormData,
		handleAdd,
	};
}
