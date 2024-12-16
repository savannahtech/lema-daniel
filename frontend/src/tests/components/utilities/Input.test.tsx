import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Input from '../../../components/utilities/Input';

describe('Input Component', () => {
	// Basic rendering tests
	test('renders input element', () => {
		render(<Input />);
		const inputElement = screen.getByRole('textbox');
		expect(inputElement).toBeInTheDocument();
	});

	// Label rendering tests
	test('renders label when provided', () => {
		render(<Input label='Email Address' />);

		const labelElement = screen.getByText('Email Address');
		expect(labelElement).toBeInTheDocument();
		expect(labelElement).toHaveClass('text-[18px]');
	});

	test('does not render label when not provided', () => {
		render(<Input />);

		const labelElement = screen.queryByRole('label');
		expect(labelElement).not.toBeInTheDocument();
	});

	// Additional props passthrough
	test('passes through additional props correctly', () => {
		render(
			<Input
				type='email'
				placeholder='Enter email'
				name='email'
				required
				disabled
			/>
		);

		const inputElement = screen.getByRole('textbox');

		expect(inputElement).toHaveAttribute('type', 'email');
		expect(inputElement).toHaveAttribute('placeholder', 'Enter email');
		expect(inputElement).toHaveAttribute('name', 'email');
		expect(inputElement).toHaveAttribute('required');
		expect(inputElement).toBeDisabled();
	});

	// Custom className tests
	test('applies additional className correctly', () => {
		render(<Input className='custom-input-class' />);

		const inputElement = screen.getByRole('textbox');
		expect(inputElement).toHaveClass('custom-input-class');

		// Also check for default classes
		expect(inputElement).toHaveClass('box-border');
		expect(inputElement).toHaveClass('flex');
		expect(inputElement).toHaveClass('items-center');
		expect(inputElement).toHaveClass('px-4');
		expect(inputElement).toHaveClass('py-2.5');
		expect(inputElement).toHaveClass('h-10');
		expect(inputElement).toHaveClass('w-full');
		expect(inputElement).toHaveClass('bg-white');
		expect(inputElement).toHaveClass('border');
		expect(inputElement).toHaveClass('border-gray-200');
		expect(inputElement).toHaveClass('rounded-md');
	});
});
