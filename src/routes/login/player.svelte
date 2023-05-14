<script lang="ts">
  import Input from "$lib/components/input.svelte";
  import Button from "$lib/components/button.svelte";
    import { goto } from "$app/navigation";

  async function handleSubmit(e: Event) {
    e.preventDefault();

    const target = e.target as HTMLFormElement;
    const formData = new FormData(target);
    const object = Object.fromEntries(formData) as Record<string, string>;

    await goto(`/room/${object.id}?player=${object.name}`)
  }
</script>

<form class="w-full flex flex-col gap-3" on:submit={handleSubmit}>
  <Input name="name" placeholder="Enter your name" required />
  <Input name="id" placeholder="Enter the room id" required />
  <Button type="submit">Join</Button>
</form>
