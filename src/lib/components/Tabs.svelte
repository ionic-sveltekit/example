<script lang="ts" module>
  import type { Snippet } from "svelte";

  import { onNavigate, goto } from "$app/navigation";

  import { page } from "$app/state";

  import { handleEnterKey, preventDefault } from "@ionic-sveltekit/components";
  import type { OnNavigate } from "@sveltejs/kit";

  type BaseTab = {
    link: string;
    activeOnDescendent?: boolean;
    matchPath?: RegExp;
  };

  interface TabOptionalTitle extends BaseTab {
    title?: string;
    icon: string;
  }

  interface TabOptionalIcon extends BaseTab {
    title: string;
    icon?: string;
  }

  export type Tab = TabOptionalTitle | TabOptionalIcon;

  export type Props = {
    content: Snippet;
    tabs: Tab[];
    tabPosition?: "top" | "bottom";
    viewTransition?: boolean;
    fixedElements?: Snippet;
  };
</script>

<script lang="ts">
  let {
    content,
    tabs,
    tabPosition,
    viewTransition = true,
    fixedElements,
  }: Props = $props();

  function determineTransitionClass(navigation: OnNavigate): string {
    return navigation.type === "popstate" && navigation.delta === -1
      ? "back"
      : "forward";
  }

  onNavigate((navigation: OnNavigate) => {
    if (!(viewTransition && document.startViewTransition)) {
      return;
    }

    document.documentElement.dataset.transition =
      determineTransitionClass(navigation);

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();

        await navigation.complete;
      });
    });
  });

  function isSelected(tab: Tab, pathname: string): boolean {
    if (tab.matchPath) {
      return tab.matchPath.test(pathname);
    }

    return tab.activeOnDescendent === true
      ? pathname.startsWith(tab.link)
      : tab.link === pathname;
  }
</script>

<ion-tabs>
  <ion-content>
    <main class="tab-content">
      {@render content()}
    </main>
  </ion-content>

  <ion-tab-bar slot={tabPosition ?? "bottom"}>
    {#each tabs as tab}
      <ion-tab-button
        selected={isSelected(tab, page.url.pathname)}
        onclick={preventDefault(() => goto(tab.link))}
        onkeydown={handleEnterKey(preventDefault(() => goto(tab.link)))}
        role="tab"
        tabindex="0"
      >
        {#if tab.icon}
          <ion-icon icon={tab.icon}></ion-icon>
        {/if}

        {#if tab.title}
          {tab.title}
        {/if}
      </ion-tab-button>
    {/each}
  </ion-tab-bar>

  <!--
    Any elements placed here, within ion-tabs after ion-tab-bar, will be rendered behind the tab bar.
    Custom CSS should be used to position these elements.
  -->
  {#if fixedElements}
    {@render fixedElements()}
  {/if}
</ion-tabs>

<style>
  .tab-content {
    max-width: 100vw;
    justify-self: center;
  }

  @media (min-width: 600px) {
    .tab-content {
      max-width: 580px;
    }
  }

  ion-tab-bar {
    view-transition-name: tab-bar;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
  }

  /* View Transitions API customizations */
  @keyframes slide-from-right {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes slide-to-left {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }

  @keyframes slide-from-left {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes slide-to-right {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(100%);
    }
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fade-out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    :root {
      &::view-transition-old(root) {
        animation:
          300ms cubic-bezier(0.4, 0, 0.2, 1) slide-to-left,
          300ms cubic-bezier(0.4, 0, 0.2, 1) fade-out;
      }

      &::view-transition-new(root) {
        animation:
          300ms cubic-bezier(0.4, 0, 0.2, 1) slide-from-right,
          300ms cubic-bezier(0.4, 0, 0.2, 1) fade-in;
      }

      /*
        use :global to bypass Svelte's unused selector protection from stripping
        [data-transition="…"] selector that is dynamically applied and can't be
        detected at compile time
        https://svelte.dev/docs/svelte/compiler-warnings#css_unused_selector
      */
      &:global([data-transition="back"]) {
        &::view-transition-old(root) {
          animation:
            300ms cubic-bezier(0.4, 0, 0.2, 1) slide-to-right,
            300ms cubic-bezier(0.4, 0, 0.2, 1) fade-out;
        }

        &::view-transition-new(root) {
          animation:
            300ms cubic-bezier(0.4, 0, 0.2, 1) slide-from-left,
            300ms cubic-bezier(0.4, 0, 0.2, 1) fade-in;
        }
      }

      &:global(.ios) {
        &::view-transition-old(root) {
          animation: 300ms cubic-bezier(0.32, 0.72, 0, 1) slide-to-left;
        }

        &::view-transition-new(root) {
          animation: 300ms cubic-bezier(0.32, 0.72, 0, 1) slide-from-right;
        }
      }

      &:global(.ios[data-transition="back"]) {
        &::view-transition-old(root) {
          animation: 300ms cubic-bezier(0.32, 0.72, 0, 1) slide-to-right;
        }

        &::view-transition-new(root) {
          animation: 300ms cubic-bezier(0.32, 0.72, 0, 1) slide-from-left;
        }
      }
    }
  }
</style>
