<script>
export let ticket = "";
export let confirm = "false";

</script>

<div class="flex flex-row justify-between my-5 mx-5 bg-AliceBlue text-Grey-400">
    <div class="fa-solid fa-chevron-left fa-2x" on:click={()=>{history.go(-1);}}></div>
    {#if ticket.length > 0}
        <p class="font-bold text-center mt-2">Ticket #{ticket}</p>
        <div class="fa-solid fa-trash-can fa-2x" on:click={()=>{location.href=`/app/tickets/delete/${ticket}`}}></div>
    {:else}
        <p class="font-bold text-center mt-2 w-full">Nouveau Ticket</p>
    {/if}
</div>