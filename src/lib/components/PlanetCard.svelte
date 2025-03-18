<script lang="ts" module>
  import type { Component } from "svelte";

  export type Props = {
    planet?: Planet | "[Undiscovered]";
    Content?: Component;
    contentProps?: Record<string, any>;
    subtitle?: string;
    imageSrc?: string;
    altText?: string;
  };

  export type Planet =
    | "mercury"
    | "venus"
    | "earth"
    | "mars"
    | "jupiter"
    | "saturn"
    | "uranus"
    | "neptune";
</script>

<script lang="ts">
  let {
    planet = "[Undiscovered]",
    Content,
    contentProps,
    subtitle,
    imageSrc,
    altText,
  }: Props = $props();
</script>

<ion-card>
  {#if imageSrc}
    <img src={imageSrc} alt={altText ?? `${planet} from space`} />
  {/if}

  <ion-card-header>
    <ion-card-title>{planet}</ion-card-title>

    {#if subtitle}
      <ion-card-subtitle>{subtitle}</ion-card-subtitle>
    {/if}
  </ion-card-header>

  {#if Content}
    <ion-card-Content>
      <Content {...contentProps} />
    </ion-card-Content>
  {/if}
</ion-card>

<style>
  ion-card-title {
    text-transform: capitalize;
  }
</style>
