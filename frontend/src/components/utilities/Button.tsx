import { IButtonProps } from '../../types/utilities.types';
import { disabledStyle, variantStyle } from '../../utils/button.utils';
import Loader from './Loader';

export default function Button({
	variant = 'naked',
	iconRight,
	iconLeft,
	children,
	loading,
	...props
}: IButtonProps) {
	return (
		<button
			className={`font-semibold flex flex-row items-center text-sm rounded h-10 ${variantStyle(
				variant
			)} ${disabledStyle(!!props?.disabled)}`}
			{...props}
		>
			{iconLeft && (
				<>
					{iconLeft}
					&nbsp;&nbsp;
				</>
			)}
			<span>{children}</span>
			{loading ? (
				<>
					&nbsp;&nbsp;
					<Loader />
				</>
			) : (
				iconRight && (
					<>
						&nbsp;&nbsp;
						{iconRight}
					</>
				)
			)}
		</button>
	);
}
