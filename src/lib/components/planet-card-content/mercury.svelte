<script lang="ts"></script>

Mercury is the <i id="popover-trigger-size">smallest planet</i> in our solar
system, <i id="popover-trigger-proximity">closest to the sun</i>, and the
<i id="popover-trigger-speed">fastest</i>
planet. It's a <i id="popover-trigger-composition">rocky, terrestrial planet</i>
with a thin atmosphere.

{#snippet popover(idSuffix: string, text: string)}
  <ion-popover trigger="popover-trigger-{idSuffix}" trigger-action="hover">
    <aside class="ion-padding">{text}</aside>
  </ion-popover>
{/snippet}

{@render popover(
  "size",
  `Diameter is approximately 4,880 kilometers (3,032 miles). It's about 38% the diameter of Earth. This makes Mercury smaller than Earth's moon. Volume is only about 5.4% of Earth's.`
)}

{@render popover(
  "proximity",
  `Average distance from the Sun is about 58 million kilometers (36 million miles). Mercury's orbit is highly elliptical, with a distance varying between 46 million km (29 million miles) at perihelion and 70 million km (43 million miles) at aphelion.`
)}

{@render popover(
  "speed",
  `Mercury travels at an average speed of about 47 km/s (29 miles/s). This makes it the fastest planet in our solar system. It completes an orbit around the Sun in just 88 Earth days.`
)}

{@render popover(
  "composition",
  `The surface is marked by numerous impact craters, resembling our Moon.`
)}

<style>
  i {
    text-decoration: underline dotted;
    cursor: pointer;
  }
</style>
