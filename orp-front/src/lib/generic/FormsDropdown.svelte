<script>
export let name;
export let label;
export let list;
export let value;
</script>

<div class="flex flex-row justify-between mx-5 mt-3 bg-AliceBlue text-Grey-400">
  {#if label.length > 0}
    <label class="w-1/4" for="{name}">{label}</label>
  {/if}
  <select class="w-full" name="{name}" id="{name}" bind:value>
    {#each list as {id, text}}
      <option value="{id}">{text}</option>
    {/each}
  </select>
</div>