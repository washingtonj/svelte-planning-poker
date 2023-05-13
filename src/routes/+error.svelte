<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import Button from "$lib/components/button.svelte";
</script>

<div class="h-full gap-4 flex flex-col items-center justify-center">
  <span class="text-center">
    <p class="text-8xl mb-2">🃟</p>
    <h1 class="font-bold text-2xl">{$page.status}</h1>
  </span>
  {#if $page.error}
    <pre class="bg-gray-100 p-4 rounded-lg text-xs">{JSON.stringify(
        $page.error?.message,
        undefined,
        2
      )}</pre>
  {/if}
  <Button type="ancor" onClick={() => goto("/")}>Back to start</Button>
</div>
