<script lang="ts">
  import Card, { type CardProps } from './card.svelte'
  import Selector, { type SelectorItem } from "./selector.svelte";
  
  const items: SelectorItem[] = [
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


  let selected: string | undefined = undefined
  $: usercard = { ...items.find((item) => item.id === selected), playerName: 'Washi' } as CardProps;



  const onSelect = (item: SelectorItem) => selected = item.id

</script>

<div class="table"> 
  <div class="flex h-40">
    <Card state={selected ? 'revealed' : 'waiting'} card={usercard} />
  </div>
  <Selector {selected} {items} {onSelect} />
</div>

<style lang="postcss">
  .table {
    @apply h-full flex flex-col items-center justify-center;
  }
</style>
