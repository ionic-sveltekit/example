<script lang="ts">
  const elements = ["oxygen", "silicon", "aluminum", "iron", "magnesium"];

  function onionItemReorder(event: any) {
    event?.detail?.complete();
  }
</script>

<ion-list>
  <ion-list-header>
    <ion-label>Most common elements</ion-label>
  </ion-list-header>

  <ion-reorder-group disabled={false} {onionItemReorder}>
    {#each elements as element}
      <ion-item>
        <ion-label>{element}</ion-label>

        <ion-reorder></ion-reorder>
      </ion-item>
    {/each}
  </ion-reorder-group>
</ion-list>
