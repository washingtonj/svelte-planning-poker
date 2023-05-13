<script context="module" lang="ts">
  export type SelectorItem = {
    id: string;
    value: number | string;
    description?: string;
  };
</script>

<script lang="ts">
  export let selected: SelectorItem | undefined = undefined;
  export let onSelect: (item: SelectorItem) => void;
  export let Items: SelectorItem[];

  $: onSelect;
</script>

<div class="selector">
  {#each Items as item}
    <div
      title={item.description}
      class="selector__item"
      class:selector__item--selected={selected?.value === item.value}
      on:click={() => onSelect(item)}
      on:keypress={() => onSelect(item)}
    >
      {item.value}
    </div>
  {/each}
</div>

<style lang="postcss">
  .selector {
    @apply flex mt-8;
  }

  .selector__item {
    @apply first:rounded-s-md last:rounded-e-md;
    @apply flex items-center justify-center w-10 h-10 border font-bold cursor-pointer;
  }

  .selector__item--selected {
    @apply transition-colors;
    @apply text-white bg-black;
  }
</style>
