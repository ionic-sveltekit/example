import type { Readable } from 'svelte/store';

import { readable } from 'svelte/store';


export const start : Readable<Date> = readable(new Date());

export const now : Readable<Date> = readable(new Date(), (set) => {
	const interval = setInterval(() => {
		set(new Date());
	}, 1000);

	return () => clearInterval(interval);
});
