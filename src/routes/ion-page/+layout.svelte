<script lang="ts" module></script>

<script lang="ts">
  let { children } = $props();
</script>

<ion-page>
  <ion-header>
    <ion-toolbar>
      <ion-title>My Page</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content>
    {@render children()}
  </ion-content>
</ion-page>

<style>
  ion-page {
    height: 100vh;
  }
</style>
