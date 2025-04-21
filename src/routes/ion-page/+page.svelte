<script lang="ts" module></script>

<script lang="ts">
  import { getRelativeHref } from "$utilities/helper";
</script>

<ion-list>
  <ion-list-header>
    <ion-label>ion-page example</ion-label>
  </ion-list-header>

  <ion-item href={getRelativeHref("1")} detail={true}>
    <ion-label>Page 1</ion-label>
  </ion-item>

  <ion-item href={getRelativeHref("2")} detail={true}>
    <ion-label>Page 2</ion-label>
  </ion-item>

  <ion-item href={getRelativeHref("3")} detail={true}>
    <ion-label>Page 3</ion-label>
  </ion-item>
</ion-list>

<style></style>
