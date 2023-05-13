<script context="module" lang="ts">
  export type CardProps = {
    playerName: string;
    value: number | string;
    description: string;
  };
</script>

<script lang="ts">
  export let card: CardProps;
  export let state: "waiting" | "voted" | "revealed";

  const waiting = !card;
</script>

<div class="table-cards">
  <div class="table-card cursor-default">
    <p
      title={card.playerName}
      class="w-full text-start text-sm overflow-hidden whitespace-nowrap text-ellipsis"
    >
      {card.playerName}
    </p>
    {#if state === "revealed"}
      <p class="text-2xl">{card.value}</p>
      <p class="w-full text-end text-sm">{card.description}</p>
    {/if}
    {#if state === "waiting"}
      <p class="text-2xl">{'⏱️'}</p>
      <p class="w-full text-end text-sm">{'...'}</p>
    {/if}
    {#if state === "voted"}
      <p class="text-2xl">{'✅'}</p>
      <p class="w-full text-end text-sm">{'...'}</p>
    {/if}
  </div>
</div>

<style lang="postcss">
  .table-card {
    @apply flex mr-2 flex-col items-center justify-between p-2 w-32 h-40 border rounded-lg font-bold;
  }

  .table-card:not(:last-child) {
    @apply mr-4;
  }
</style>
