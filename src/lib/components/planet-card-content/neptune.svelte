<script lang="ts" module>
  import {
    home,
    heart,
    pin,
    star,
    call,
    globe,
    basket,
    barbell,
    trash,
    person,
  } from "ionicons/icons";
</script>

<script lang="ts"></script>

<ion-segment scrollable={true} value="heart">
  <ion-segment-button value="home">
    <ion-icon icon={home}></ion-icon>
  </ion-segment-button>

  <ion-segment-button value="heart">
    <ion-icon icon={heart}></ion-icon>
  </ion-segment-button>

  <ion-segment-button value="pin">
    <ion-icon icon={pin}></ion-icon>
  </ion-segment-button>

  <ion-segment-button value="star">
    <ion-icon icon={star}></ion-icon>
  </ion-segment-button>

  <ion-segment-button value="call">
    <ion-icon icon={call}></ion-icon>
  </ion-segment-button>

  <ion-segment-button value="globe">
    <ion-icon icon={globe}></ion-icon>
  </ion-segment-button>

  <ion-segment-button value="basket">
    <ion-icon icon={basket}></ion-icon>
  </ion-segment-button>

  <ion-segment-button value="barbell">
    <ion-icon icon={barbell}></ion-icon>
  </ion-segment-button>

  <ion-segment-button value="trash">
    <ion-icon icon={trash}></ion-icon>
  </ion-segment-button>

  <ion-segment-button value="person">
    <ion-icon icon={person}></ion-icon>
  </ion-segment-button>
</ion-segment>

<ion-note>
  The above segment component admittedly has no relation to the planet Neptune.
  It simply demonstrates a useful UI tool.
</ion-note>

<style>
  ion-note {
    display: inline-block;
    margin-top: 1em;
  }
</style>
