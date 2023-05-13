<script lang="ts">

  import Input from "$lib/components/input.svelte";
  import Button from "$lib/components/button.svelte";
    import { goto } from "$app/navigation";

  async function handleSubmit(e: Event) {
    e.preventDefault();

    const target = e.target as HTMLFormElement;
    const formData = new FormData(target);
    const object = Object.fromEntries(formData) as Record<string, string>;

    const response = await fetch(window.location.href, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        roomName: object.room,
        croupierName: object.croupier,
      }),
    });

    const { id } = await response.json();

    await goto(`/room/${id}?player=${object.croupier}`);
  }
</script>

<form on:submit={handleSubmit} class="w-full flex flex-col gap-3">
  <Input name="croupier" placeholder="Enter your name" required />
  <Input name="room" placeholder="Enter the room name" required />
  <Button type="submit">Create</Button>
</form>
