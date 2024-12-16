import { IAddPostFormProps } from '../../types/form.types';
import Input from '../utilities/Input';
import Textarea from '../utilities/Textarea';

export default function AddPostForm({
	formData,
	handleSetFormData,
}: IAddPostFormProps) {
	return (
		<form className='space-y-6'>
			<Input
				placeholder='Give your post a title'
				label='Post title'
				value={formData.title}
				onChange={(e) => handleSetFormData('title', e?.target?.value)}
			/>
			<Textarea
				placeholder='Write something mind-blowing'
				label='Post content'
				value={formData.body}
				onChange={(e) => handleSetFormData('body', e?.target?.value)}
			/>
		</form>
	);
}
