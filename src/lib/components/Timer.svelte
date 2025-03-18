<script lang="ts" module>
  import { start, now } from "$stores/timer";

  import { Tooltip, Ago } from "@ionic-sveltekit/components";

  import { timerOutline } from "ionicons/icons";
</script>

<script lang="ts"></script>

<Tooltip
  triggerSize="small"
  triggerColor="medium"
  triggerButtonFill="clear"
  triggerClass="timer-tooltip-trigger"
  triggerIcon={timerOutline}
>
  Current SPA was initialized <Ago from={$start} now={$now} />
</Tooltip>

<style>
  :global(.timer-tooltip-trigger) {
    --padding-start: 4px;
    --padding-end: 4px;

    position: absolute;
    bottom: 0;
    right: 0;

    view-transition-name: timer;
  }
</style>
