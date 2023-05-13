<script context="module" lang="ts">
  export type CardItem = {
    value: number | string;
    description?: string;
  };
</script>

<script lang="ts">
  export let playerName: string;
  export let card: CardItem | undefined;

  const waiting = !card;
  
</script>

<div class="table-cards">
  <div class="table-card cursor-default">
    <p
      title={playerName}
      class="w-full text-start text-sm overflow-hidden whitespace-nowrap text-ellipsis"
    >
      {playerName}
    </p>
    <p class="text-2xl">{waiting ? '🤫' : card?.value}</p>
    <p class="w-full text-end text-sm">{waiting ? '...' : card?.description}</p>
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
