import type {
	FloatingElement,
	Middleware,
	MiddlewareData,
	Placement,
	ReferenceElement,
	Strategy,
} from '@floating-ui/dom';
import type { Action } from 'svelte/action';

type ValueOrGetValue<T> = T | (() => T);

export type UseFloatingOptions = {
	/**
	 * Represents the open/close state of the floating element.
	 * @default true
	 */
	open?: ValueOrGetValue<boolean | undefined>;
	/**
	 * Where to place the floating element relative to its reference element.
	 * @default 'bottom'
	 */
	placement?: ValueOrGetValue<Placement | undefined>;
	/**
	 * The type of CSS position property to use.
	 * @default 'absolute'
	 */
	strategy?: ValueOrGetValue<Strategy | undefined>;
	/**
	 * These are plain objects that modify the positioning coordinates in some fashion, or provide useful data for the consumer to use.
	 * @default undefined
	 */
	middleware?: ValueOrGetValue<Middleware[] | undefined>;
	/**
	 * Whether to use `transform` instead of `top` and `left` styles to
	 * position the floating element (`floatingStyles`).
	 * @default true
	 */
	transform?: ValueOrGetValue<boolean | undefined>;
	/**
	 * Callback to handle mounting/unmounting of the elements.
	 * @default undefined
	 */
	whileElementsMounted?: (
		reference: ReferenceElement,
		floating: FloatingElement,
		update: () => void,
	) => () => void;
};

export type UseFloatingReturn = {
	/**
	 * The action used to obtain the reference element.
	 */
	reference: Action<HTMLElement>;
	/**
	 * The action used to obtain the floating element.
	 */
	floating: Action<HTMLElement>;
	/**
	 * The stateful placement, which can be different from the initial `placement` passed as options.
	 */
	placement: Readonly<Placement>;
	/**
	 * The type of CSS position property to use.
	 */
	strategy: Readonly<Strategy>;
	/**
	 * Additional data from middleware.
	 */
	middlewareData: Readonly<MiddlewareData>;
	/**
	 * The boolean that let you know if the floating element has been positioned.
	 */
	isPositioned: Readonly<boolean>;
	/**
	 * CSS styles to apply to the floating element to position it.
	 */
	floatingStyles: Readonly<{
		position: Strategy;
		top: string;
		left: string;
		transform?: string;
		willChange?: string;
	}>;
	/**
	 * The function to update floating position manually.
	 */
	update: () => void;
};
