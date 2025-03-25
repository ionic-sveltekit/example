import type { PageServerLoad } from './$types';

import type {
	Props as PlanetCardProps,
} from "$components/PlanetCard.svelte";

import { dev } from '$app/environment';

import { NASA_API_KEY } from '$env/static/private';

export const load: PageServerLoad = async ({ params, fetch }) : Promise<Partial<PlanetCardProps>> => {
	if (!NASA_API_KEY || params.planet !== 'mars') {
		return {};
	}

	let json : Record<string, any> | undefined;

	try {
		const response = await fetch(`https://api.nasa.gov/insight_weather/?api_key=${ NASA_API_KEY }&feedtype=json&ver=1.0`);

		if (response.ok) {
			json = await response.json();
		}
	} catch (e) {
		if (dev) {
			console.error(e);
		}
	}

	if (!(json && json?.sol_keys?.length)) {
		return {};
	}

	const data = json.sol_keys
		.map((sol : string) => json[sol])
		.map((solData : any) => ({
			timestamp : solData.Last_UTC,
			temperature : solData.AT.av,
			wind_speed : solData.HWS.av,
		}));

	return {
		contentProps: {
			data,
		},
	};
};
