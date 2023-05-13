<script lang="ts">
    import { onMount } from "svelte";
  import Card, { type CardItem } from "./card.svelte";
  // import Selector, { type SelectorItem } from "./selector.svelte";

  type Player = {
    name: string;
    status: 'selected' | 'waiting';
    cardId?: string;
  };

  let player: Player = {
    name: "Washi",
    status: "selected",
    cardId: "1",
  } 

  const otherPlayers: Player[] = [
    {
      name: "Leo",
      status: "selected",
      cardId: "1",
    },
    {
      name: "Renan",
      status: "waiting",
    }
  ]



  const Items: SelectorItem[] = [
    {
      id: "1",
      value: 1,
      description: "30 minutes",
    },
    {
      id: "2",
      value: 2,
      description: "Half an hour",
    },
    {
      id: "3",
      value: 3,
      description: "A day",
    },
    {
      id: "4",
      value: 5,
      description: "A week",
    },
    {
      id: "5",
      value: 8,
      description: "Two weeks",
    },
    {
      id: "6",
      value: "☕️",
      description: "Coffee break",
    },
  ];

  function onSelect(item: SelectorItem) {
    player = { 
      name: player.name,
      status: player.status,
      cardId: item.id,
     };
  }
</script>

<div class="table"> 
  <div class="flex h-40">
  </div>
  <!-- <Selector selected={[]} {Items} {onSelect} /> -->
</div>

<style lang="postcss">
  .table {
    @apply h-full flex flex-col items-center justify-center;
  }
</style>
