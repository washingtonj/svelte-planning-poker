<script>
  import Navbar from "$lib/components/navbar.svelte";
</script>

<main>
  <main class="flex flex-col justify-center items-center">
    <span class="text-center mt-[20vh]">
      <h1 class="font-bold text-3xl">Welcome to Svelte Poker</h1>
      <p>The Svelte Poker is an planning poker app write using SvelteKit</p>
    </span>

    <div class="flex mt-8">
      <a href="/room?type=player" class="hall-btn mr-2">Player</a>
      <a href="/room?type=croupier" class="hall-btn">Croupier</a>
    </div>
  </main>

  <style lang="postcss">
    .hall-btn {
      @apply flex justify-center items-center w-32 h-40 border rounded-lg font-bold hover:border-black hover:border-2 transition-colors;
    }
  </style>
</main>
