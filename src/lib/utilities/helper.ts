import { page } from '$app/state';

export function getRelativeHref(path : string) : string {
	return [
		page.url.pathname,
		path,
	].join('/');
}