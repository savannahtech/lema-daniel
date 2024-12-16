import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Gear, House } from '@phosphor-icons/react';
import Button from '../../../components/utilities/Button';

// Mock the Loader component
jest.mock('../../../components/utilities/Loader', () => {
	return function DummyLoader() {
		return <div data-testid='loader'>Loading...</div>;
	};
});

describe('Button Component', () => {
	// Basic rendering tests
	test('renders button with children text', () => {
		render(<Button>Click me</Button>);
		const buttonElement = screen.getByText('Click me');
		expect(buttonElement).toBeInTheDocument();
	});

	// Icon tests
	test('renders left icon correctly', () => {
		render(
			<Button iconLeft={<House data-testid='left-icon' />}>
				Button with Left Icon
			</Button>
		);

		const buttonElement = screen.getByText('Button with Left Icon');
		const leftIcon = screen.getByTestId('left-icon');

		expect(buttonElement).toBeInTheDocument();
		expect(leftIcon).toBeInTheDocument();
	});

	test('renders right icon correctly', () => {
		render(
			<Button iconRight={<Gear data-testid='right-icon' />}>
				Button with Right Icon
			</Button>
		);

		const buttonElement = screen.getByText('Button with Right Icon');
		const rightIcon = screen.getByTestId('right-icon');

		expect(buttonElement).toBeInTheDocument();
		expect(rightIcon).toBeInTheDocument();
	});

	// Loading state test
	test('shows loader when loading prop is true', () => {
		render(<Button loading>Loading Button</Button>);

		const buttonElement = screen.getByText('Loading Button');
		const loader = screen.getByTestId('loader');

		expect(buttonElement).toBeInTheDocument();
		expect(loader).toBeInTheDocument();
	});

	// Loading state takes precedence over right icon
	test('loader replaces right icon when loading is true', () => {
		render(
			<Button loading iconRight={<Gear data-testid='right-icon' />}>
				Loading with Right Icon
			</Button>
		);

		const buttonElement = screen.getByText('Loading with Right Icon');
		const loader = screen.getByTestId('loader');

		expect(buttonElement).toBeInTheDocument();
		expect(loader).toBeInTheDocument();

		const rightIcon = screen.queryByTestId('right-icon');
		expect(rightIcon).not.toBeInTheDocument();
	});
});
