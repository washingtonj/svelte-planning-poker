<script lang="ts">
  import { goto } from "$app/navigation";
  import Input from "$lib/components/input.svelte";
  import Button from "$lib/components/button.svelte";
  import { handleSubmit } from "$lib/form-utils";

  interface FormSchema {
    name: string;
    id: string;
  }

  async function submit(data: FormSchema) {
    const { name, id } = data;
    await goto(`/room/${id}?player=${name}`);
  }
</script>

<form
  class="w-full flex flex-col gap-3"
  on:submit={(event) => handleSubmit(event, submit)}
>
  <Input name="name" placeholder="Enter your name" required />
  <Input name="id" placeholder="Enter the room id" required />
  <Button type="submit">Join</Button>
</form>
