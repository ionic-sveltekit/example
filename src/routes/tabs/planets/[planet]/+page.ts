import type { Component } from "svelte";
import type { PageLoad } from './$types';

import type {
	Props as PlanetCardProps,
	Planet,
} from "$components/PlanetCard.svelte";

import { dev } from '$app/environment';

const subtitleRecord: Partial<Record<Planet, string>> = {
	mercury: "The Swift Planet",
	// venus: "",
	earth: "3rd Rock from the Sun",
	// mars: "",
	// jupiter: "",
	saturn: "The Ringed Planet",
	// uranus: "",
	neptune: "The Windy Planet",
};

export const load: PageLoad = async ({ data, params }) : Promise<Partial<PlanetCardProps>> => {
	const planet = params.planet as Planet;

	let Content : Component | undefined;
	let imageSrc : string | undefined;

	if (planet) {
		Content = (await getDynamicImport(planet)) as Component;
		imageSrc = (await getDynamicImport(planet, false)) as string;
	}

	return {
		...data,
		planet,
		Content,
		imageSrc,
		subtitle: subtitleRecord[planet],
	};
};

async function getDynamicImport(planet : Planet, isComponent : boolean = true) : Promise<undefined | Component | string> {
	let module: { default: Component | string } | undefined;

	try {
		// SvelteKit/Vite only resolves dynamic imports when passed as a string literal to the import method
		// therefore we can't pass a path variable, or something more elegant
		// the following awkward ternary expression is a necessary workaround
		module = await import(isComponent ? `$components/planet-card-content/${ planet }.svelte` : `$images/planets/${ planet }.jpg`);
	} catch (e) {
		const error = e as Error;

		const status : 404 | 500 = error.toString().startsWith('Error: Unknown variable dynamic import')
			? 404
			: 500;

		if (dev) {
			console.error(status, error);
		}
	}

	return module?.default;
}