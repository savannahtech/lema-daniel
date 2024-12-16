import { TButtonVariant } from '../types/utilities.types';

/**
 * Returns the tailwind class based on the button variant.
 *
 * @param variant - The variant of the button.
 * @returns A string representing the tailwind class.
 */
export function variantStyle(variant: TButtonVariant): string {
	if (variant === 'primary') return 'px-5 py-2 bg-[#334155] text-white'; // Returns an empty string for 'naked' variant
	if (variant === 'outline') return 'px-5 py-2 border'; // Returns an empty string for 'naked' variant
	if (variant === 'naked') return ''; // Returns an empty string for 'naked' variant
	return ''; // Default return for other variants
}

/**
 * Returns the tailwind class based on the disabled state of the button.
 *
 * @param isDisabled - Boolean indicating if the button is disabled.
 * @returns A string representing the tailwind class.
 */
export function disabledStyle(isDisabled: boolean): string {
	return isDisabled ? 'opacity-50 cursor-not-allowed' : '';
}
