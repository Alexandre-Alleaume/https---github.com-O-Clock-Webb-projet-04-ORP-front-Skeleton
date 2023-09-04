<script>
    export let name;
    export let label;
    export let value = "";
    export let placeholder = "";
    if(value.length > 0 && placeholder.length === 0)
    {
        placeholder = value;
    }
</script>
<div class="flex flex-row justify-between mx-5 mt-3 bg-AliceBlue text-Grey-400">
    <label class="w-1/4"
           for="{name}">{label}</label>
    <input class="w-3/4"
           type="text"
           id="{name}"
           name="{name}"
           placeholder="{placeholder}"
           value="{value}">
</div>