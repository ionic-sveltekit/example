<script lang="ts" module>
  import { initialize } from "@ionic-sveltekit/core";

  /* Import all components - or do partial loading - see below */
  import "@ionic-sveltekit/core/dist/all";

  /*
		This part - import '@ionic-sveltekit/core/dist/all'; -  loads all components at once.

		This adds at least >800kb (uncompressed) to your bundle - 80 components (so do your math!!)

		You can also choose to import each component you want to use separately and leave out others.

		It is recommended to do this in this file, as you only need to do such once. But you are free
		to do this elsewhere if you like to code-split differently.

		Example: if you replace the line import '@ionic-sveltekit/core/components/all'; with the imports below, you will see the resulting bundle being much smaller

		import '@ionic-sveltekit/core/dist/components/ion-app';
		import '@ionic-sveltekit/core/dist/components/ion-card';
		import '@ionic-sveltekit/core/dist/components/ion-card-title';
		import '@ionic-sveltekit/core/dist/components/ion-card-subtitle';
		import '@ionic-sveltekit/core/dist/components/ion-card-header';
		import '@ionic-sveltekit/core/dist/components/ion-card-content';
		import '@ionic-sveltekit/core/dist/components/ion-chip';
		import '@ionic-sveltekit/core/dist/components/ion-button';
	*/

  /* Global CSS */
  import "../theme/global.css";

  /* Theme variables */
  import "../theme/variables.css";
</script>

<script lang="ts">
  /* Call Ionic's setup routine */
  initialize({
    // mode: "ios", // or "md"
  });

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="shortcut icon" href="/favicon.ico" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <meta name="apple-mobile-web-app-title" content="Ionic SvelteKit" />
  <link rel="manifest" href="/site.webmanifest" />
</svelte:head>

<ion-app>
  {@render children()}
</ion-app>

<style></style>
