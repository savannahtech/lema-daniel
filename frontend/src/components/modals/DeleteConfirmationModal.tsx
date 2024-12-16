import { useQueryClient } from '@tanstack/react-query';
import { userPostsKey } from '../../constants/keys.constants';
import { useDeletePost } from '../../hooks/api-integration/tanstack/mutations';
import { DeleteModalLayoutProps } from '../../types/layouts.types';
import ModalLayout from '../layout/component-layouts/ModalLayout';

export default function DeleteConfirmationModal({
	id,
	userId,
	...props
}: DeleteModalLayoutProps) {
	const queryClient = useQueryClient();
	const { mutate, isPending } = useDeletePost(id, () => {
		props?.setOpen && props?.setOpen(false);
		queryClient.invalidateQueries({
			queryKey: userPostsKey(userId),
		});
	});
	return (
		<ModalLayout
			{...props}
			title='Are you certain?'
			showCancel
			confirmButtonFn={() => mutate()}
			confirmButtonText={'Yup!'}
			confirmButtonLoading={isPending}
			size='sm'
		>
			This action can't be undone. Are you sure you want to proceed?
		</ModalLayout>
	);
}
