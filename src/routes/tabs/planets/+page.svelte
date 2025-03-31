<script lang="ts" module>
  import type { Planet } from "$components/PlanetCard.svelte";

  import { getRelativeHref } from "$utilities/helper";

  import img from "$images/planets.jpg";
</script>

<script lang="ts">
  let count = $state(8);

  const planets = [
    "mercury",
    "venus",
    "earth",
    "mars",
    "jupiter",
    "saturn",
    "uranus",
    "neptune",
  ];

  function onionInput(event: any) {
    count = (event.detail?.value as number) ?? 8;
  }
</script>

<ion-card>
  <img src={img} alt="planets of our solar system" />

  <ion-card-header>
    <ion-card-title>Planets</ion-card-title>

    <ion-card-subtitle>{count} Planets</ion-card-subtitle>
  </ion-card-header>

  <ion-card-content>
    <ion-range
      min={4}
      max={12}
      value={count}
      aria-label="planet count"
      {onionInput}
    ></ion-range>

    <ol>
      {#snippet planetLink(planet: Planet)}
        <a href={getRelativeHref(planet)}>{planet}</a>
      {/snippet}

      {#each Array(count) as _, index}
        {@const planet = planets[index] ?? "[Undiscovered]"}

        <li>
          {#if planet === "mercury" || planet === "earth" || planet === "mars" || planet === "saturn" || planet === "neptune"}
            {@render planetLink(planet)}
          {:else}
            {planet}
          {/if}
        </li>
      {/each}
    </ol>
  </ion-card-content>
</ion-card>

<style>
  li {
    text-transform: capitalize;
  }
</style>
