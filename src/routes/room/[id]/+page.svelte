<script lang="ts">
  import Card, { type CardProps } from "./card.svelte";
  import Selector, { type SelectorItem } from "./selector.svelte";
  import Button from "$lib/components/button.svelte";
  import type { PageServerData } from "./$types";

  export let data: PageServerData;

  let selected: string | undefined = undefined;

  $: playercard = {
    ...data.room.cards.find((item) => item.id === selected),
    playerName: data.player.name,
  } as CardProps;

  $: playerscard = data.room.players.map(player => ({
    playerName: player.name,
    description: "",
    value: 0,
  }) as CardProps)

  $: items = data.room.cards.map((item) => ({
    id: item.id,
    name: data.player.name,
    description: item.description,
    value: item.value,
  })) as SelectorItem[];

  const onSelect = (item: SelectorItem) => (selected = item.id);
</script>

<div class="container h-full max-w-screen-2xl m-auto p-4">
  <div class="flex flex-col h-full">
    <span>
      <h1 class="text-2xl font-bold">{data.room.name}</h1>
      <p>{data.room.id}</p>
    </span>

    <div class="flex flex-col h-full items-center justify-center">
      <div class="flex">
        <Card state={selected ? "revealed" : "waiting"} card={playercard} />
        {#each playerscard as card}
          <Card state="waiting" card={card} />
        {/each}
      </div>
      <Selector {selected} {items} {onSelect} />

      <div class="w-32 mt-8">
        <Button style="width: 100%;">Reveal</Button>
      </div>
    </div>

    <div class="flex flex-col">
      <div />
    </div>
  </div>
</div>
