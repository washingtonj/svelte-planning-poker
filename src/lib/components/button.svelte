<script lang="ts">
  export let onClick: () => void = () => {};
  export let type: "submit" | "button" | "ancor" = "button";
</script>

{#if type === "ancor"}
  <button class="ancor" type="button" on:click={onClick}>
    <slot />
  </button>
{:else}
  <button class="button" {type} on:click={onClick}>
    <slot />
  </button>
{/if}

<style lang="postcss">
  .ancor {
    @apply text-black p-0 bg-transparent border-none;
    @apply hover:underline;
  }

  .button {
    @apply w-full text-white font-bold py-2 rounded-lg bg-gray-950;
    @apply hover:bg-gray-800 transition-colors;
  }
</style>
