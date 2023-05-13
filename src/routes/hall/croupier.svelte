<script lang="ts">
  import Input from "$lib/components/input.svelte";
  import Button from "$lib/components/button.svelte";

  function handleSubmit(e: Event) {
    e.preventDefault();

    const target = e.target as HTMLFormElement;
    const formData = new FormData(target);
    const object = Object.fromEntries(formData) as Record<string, string>;

    console.log({
      id: object.id,
      name: object.name,
    });
  }
</script>

<form on:submit={handleSubmit} class="w-full flex flex-col gap-3">
  <Input placeholder="Enter your name" required />
  <Input placeholder="Enter the room name" required />
  <Button type="submit">Create</Button>
</form>
