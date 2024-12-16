import useAddPostModal from '../../hooks/component-logic/useAddPostModal';
import { AddPostModalLayoutProps } from '../../types/layouts.types';
import AddPostForm from '../forms/AddPostForm';
import ModalLayout from '../layout/component-layouts/ModalLayout';

export default function AddPostModal({
	userId,
	...props
}: AddPostModalLayoutProps) {
	const { formData, isPending, handleSetFormData, handleAdd } =
		useAddPostModal(userId, props?.setOpen);
	return (
		<ModalLayout
			{...props}
			title='New Post'
			showCancel
			confirmButtonText={'Publish'}
			confirmButtonFn={handleAdd}
			confirmButtonLoading={isPending}
		>
			<AddPostForm
				formData={formData}
				handleSetFormData={handleSetFormData}
			/>
		</ModalLayout>
	);
}
