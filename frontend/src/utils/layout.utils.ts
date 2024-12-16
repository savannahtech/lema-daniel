import {
	TCardBorderTypes,
	TModalLayoutSizes,
	TTitleSize,
} from '../types/layouts.types';

export function layoutTitleFontSize(size?: TTitleSize) {
	if (size === 'lg') return 'text-5xl md:text-7xl';
	if (size === 'md') return 'text-4xl';
	return '';
}

export function cardLayoutBorderType(type?: TCardBorderTypes) {
	if (type === 'dashed') return 'border-long-dashed';
	if (type === 'dotted') return 'border-dotted';
	return '';
}

export function modalLayoutSize(size?: TModalLayoutSizes) {
	let style = 'max-w-[390px] w-full ';
	if (size === 'md') style += 'md:max-w-[679px]';
	if (size === 'sm') style += 'md:max-w-[400px]';
	return style;
}
