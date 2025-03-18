<script lang="ts" module>
  type Props = {
    data?: any[];
  };
</script>

<script lang="ts">
  let { data = [] }: Props = $props();
</script>

<ion-list>
  <ion-list-header>
    <ion-label
      >Recent weather <i id="data-info-trigger">measurements</i></ion-label
    >

    <ion-popover trigger="data-info-trigger" trigger-action="hover">
      <aside class="ion-padding">
        Weather data is collected from NASA's InSight Mars lander and made
        available via API. <a
          href="https://api.nasa.gov/#insight_weather"
          target="_blank">Learn more</a
        >
      </aside>
    </ion-popover>
  </ion-list-header>

  {#snippet details(key: string, value: string)}
    <ion-label>
      <h4 class="key">{key}</h4>

      <h3 class="value">{value}</h3>
    </ion-label>
  {/snippet}

  {#each data as measurement}
    <div class="measurement-item">
      {@render details("timestamp", measurement.timestamp)}

      {@render details("temperature", measurement.temperature + "°C")}

      {@render details("wind speed", measurement.wind_speed + "m/s")}
    </div>
  {/each}
</ion-list>

<style>
  i {
    text-decoration: underline dotted;
    cursor: pointer;
  }

  .measurement-item {
    display: flex;
    flex-direction: row;
    gap: 10px;
    padding-right: calc(var(--ion-safe-area-left, 0px) + 16px);
    padding-left: calc(var(--ion-safe-area-left, 0px) + 16px);
    border-width: 0px 0px 0.55px 0px;
    border-style: solid;
    border-color: #c8c7cc;
  }

  .measurement-item ion-label {
    flex: 1;
    width: 33.333%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .measurement-item ion-label:first-child {
    align-items: start;
  }

  .measurement-item ion-label:last-child {
    align-items: end;
  }

  .key {
    white-space: nowrap;
    margin-bottom: 4px;
    color: #57606a;
    font-size: 12px;
  }

  .value {
    display: block;
    color: #24292f;
    font-size: 16px;
    font-weight: 600;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 100%;
  }

  @media (prefers-color-scheme: dark) {
    .key {
      color: #a89f95;
    }

    .value {
      color: #dbd6d0;
    }
  }
</style>
