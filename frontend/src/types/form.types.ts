export interface IAddPostFormProps {
	formData: {
		title: string;
		body: string;
	};
	handleSetFormData: (key: string, data: string) => void;
}
