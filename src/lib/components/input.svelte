<script lang="ts">
  export let placeholder: string = "";
  export let value: string = "";
  export let id: string = "";
  export let name: string = "";
  export let required = false;
  export let style: string = "";
  export let onChange: (e: string) => void = () => {};

  function handleChange(e: Event) {
    const target = e.target as HTMLInputElement;
    onChange(target.value);
  }
</script>

<input
  type="text"
  {name}
  {id}
  {value}
  {placeholder}
  {required}
  {style}
  on:input={handleChange}
/>

<style lang="postcss">
  input {
    @apply h-12 border rounded-lg px-4;
    @apply focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent;
  }
</style>
