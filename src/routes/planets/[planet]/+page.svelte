<script lang="ts" module>
  import type { PageProps } from "./$types";

  import PlanetCard from "$components/PlanetCard.svelte";
</script>

<script lang="ts">
  let { data }: PageProps = $props();
</script>

<PlanetCard {...data} />
