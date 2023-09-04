<script>
    export let name;
    export let label;
    export let rows = 5;
    export let cols = 33;
    export let value = "";
</script>
<div class="flex flex-col justify-between mx-5 bg-AliceBlue text-Grey-400">
    <label for="{name}">{label}</label>
    <textarea id="{name}" name="{name}" rows="{rows}" cols="{cols}">{value}</textarea>
</div>