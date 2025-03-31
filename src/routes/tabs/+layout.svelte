<script lang="ts" module>
  import type { Tab } from "@ionic-sveltekit/components";

  import { homeOutline, planetOutline } from "ionicons/icons";

  import { Tabs } from "@ionic-sveltekit/components";

  import Timer from "$components/Timer.svelte";
</script>

<script lang="ts">
  let { children } = $props();

  const tabs: Tab[] = [
    {
      link: "/tabs",
      title: "Homepage",
      icon: homeOutline,
    },
    {
      link: "/tabs/planets",
      title: "Planets",
      icon: planetOutline,
      activeOnDescendent: true,
    },
  ];
</script>

<Tabs {tabs}>
  {#snippet content()}
    {@render children()}
  {/snippet}

  {#snippet fixedElements()}
    <Timer />
  {/snippet}
</Tabs>

<style></style>
