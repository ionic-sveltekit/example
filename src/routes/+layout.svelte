<script lang="ts" module>
  import type { Tab } from "@ionic-sveltekit/components";

  import { setupIonicBase } from "@ionic-sveltekit/core";

  import { homeOutline, planetOutline } from "ionicons/icons";

  import { Tabs } from "@ionic-sveltekit/components";

  import Timer from "$components/Timer.svelte";

  /* Import all components - or do partial loading - see below */
  import "@ionic-sveltekit/core/components/all";

  /*
		This part - import '@ionic-sveltekit/core/components/all'; -  loads all components at once.

		This adds at least >800kb (uncompressed) to your bundle - 80 components (so do your math!!)

		You can also choose to import each component you want to use separately and leave out others.

		It is recommended to do this in this file, as you only need to do such once. But you are free
		to do this elsewhere if you like to code-split differently.

		Example: if you replace the line import '@ionic-sveltekit/core/components/all'; with the imports below, you will see the resulting bundle being much smaller

		import '@ionic-sveltekit/core/components/ion-app';
		import '@ionic-sveltekit/core/components/ion-card';
		import '@ionic-sveltekit/core/components/ion-card-title';
		import '@ionic-sveltekit/core/components/ion-card-subtitle';
		import '@ionic-sveltekit/core/components/ion-card-header';
		import '@ionic-sveltekit/core/components/ion-card-content';
		import '@ionic-sveltekit/core/components/ion-chip';
		import '@ionic-sveltekit/core/components/ion-button';

		Open @ionic-sveltekit/core/components/all to view the full list of possible imports
	*/

  /* Global CSS */
  import "../theme/global.css";

  /* Theme variables */
  import "../theme/variables.css";
</script>

<script lang="ts">
  /* Call Ionic's setup routine */
  setupIonicBase({
    mode: "ios",
  });

  let { children } = $props();

  const tabs: Tab[] = [
    {
      link: "/",
      title: "Homepage",
      icon: homeOutline,
    },
    {
      link: "/planets",
      title: "Planets",
      icon: planetOutline,
      activeOnDescendent: true,
    },
  ];
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
  <Tabs {tabs}>
    {#snippet content()}
      {@render children()}
    {/snippet}

    {#snippet fixedElements()}
      <Timer />
    {/snippet}
  </Tabs>
</ion-app>

<style></style>
