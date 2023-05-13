<script lang="ts">
  import Button from "$lib/components/button.svelte";
  import Player from "./player.svelte";
  import Croupier from "./croupier.svelte";

  type User = "player" | "croupier";

  let selected: User = "player";

  function toggle() {
    selected = selected === "player" ? "croupier" : "player";
  }
</script>

<main>
  <main class="flex flex-col justify-center items-center pt-[25vh]">
    <span class="inline-flex text-center items-center mb-8">
      <h1 class="text-6xl">🂮</h1>
      <h1 class="text-6xl">🂭</h1>
      <h1 class="text-6xl">🂫</h1>
    </span>

    <div class="w-96 flex flex-col gap-3">
      {#if selected === "player"}
        <Player />
      {:else}
        <Croupier />
      {/if}
      <Button type="ancor" onClick={toggle}>
        {selected === "player" ? "as a croupier" : "as a player"}
      </Button>
    </div>
  </main>
</main>
