<script lang="ts">
  import { goto } from "$app/navigation";
  import Input from "$lib/components/input.svelte";
  import Button from "$lib/components/button.svelte";
  import { handleSubmit } from '$lib/form-utils'

  interface FormSchema {
    croupier: string;
    room: string;
  }

  async function submit(data: FormSchema) {
    const { croupier, room } = data;

    const response = await fetch(window.location.href, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: room,
        croupier,
      }),
    });

    const json = await response.json();

    await goto(`/room/${json.room.id}?player=${croupier}`);
  }
</script>

<form on:submit={event => handleSubmit(event, submit)} class="w-full flex flex-col gap-3">
  <Input name="croupier" placeholder="Enter your name" required />
  <Input name="room" placeholder="Enter the room name" required />
  <Button type="submit">Create</Button>
</form>
