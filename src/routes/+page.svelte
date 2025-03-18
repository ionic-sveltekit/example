<script lang="ts" module>
  import { handleEnterKey } from "@ionic-sveltekit/components";

  import img from "$images/home.png";
</script>

<script lang="ts">
  let count = $state(0);

  const verb = $derived("click" + (count === 1 ? "" : "s"));

  function onclick() {
    count++;
  }

  function reset() {
    count = 0;
  }
</script>

<ion-card>
  <img
    src={img}
    alt="illustrated house"
    style="--rotation: {count * 22.5}deg;"
  />

  <ion-card-header>
    <ion-card-title>Homepage</ion-card-title>

    <ion-card-subtitle>Welcome</ion-card-subtitle>
  </ion-card-header>

  <ion-card-content>
    <ion-list>
      <ion-item href="/planets">
        <ion-label>learn about our planets</ion-label>
      </ion-item>

      <ion-list-header>
        <ion-label>Or enjoy some mindless clicking</ion-label>
      </ion-list-header>

      <ion-item lines="none">
        <ion-button
          {onclick}
          onkeydown={handleEnterKey(onclick)}
          role="button"
          tabindex="0"
          size="default"
          fill="outline"
        >
          {count}
          {verb}
        </ion-button>

        <ion-button
          slot="end"
          onclick={reset}
          onkeydown={handleEnterKey(reset)}
          role="button"
          tabindex="0"
          size="small"
          fill="clear"
        >
          reset clicks
        </ion-button>
      </ion-item>
    </ion-list>
  </ion-card-content>
</ion-card>

<style>
  img {
    transform: rotate(var(--rotation));
  }
</style>
