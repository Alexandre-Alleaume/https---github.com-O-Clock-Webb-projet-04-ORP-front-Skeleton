<script>
    import FormsDropdown from "$lib/generic/FormsDropdown.svelte";
    import {lists} from "$assets/displayLists.js";
    import FormsInputText from "$lib/generic/FormsInputText.svelte";
    import FormsTextarea from "$lib/generic/FormsTextarea.svelte";

    export let ticket = "";
    export let priority = "";
    priority = parseInt(priority);
    export let clientName = "";
    export let parc = "";
    parc = parseInt(parc);
    export let type = "";
    type = parseInt(type);
    export let address = "";
    export let ticketDetails = {};

    function submit(event){
        event.preventDefault();
        const formData = new FormData(event.target);
        for (let field of formData) {
            const [key, value] = field;
            ticketDetails[key] = value;
        }
    }
</script>
<form on:submit={submit}>
    <!--Ticket #-->
    <p class="font-bold text-center w-full mt-5 mb-3 bg-AliceBlue text-Grey-400">
    {#if ticket.length > 0}
        Mise à jour de la demande
    {:else}
        &nbsp;
    {/if}
    </p>
    <!--Client name-->
    <div class="mt-5">
        <FormsInputText label="Client"
                        name="client"
                        value="{clientName}"/>
    </div>
    <!--Urgency-->
    <div class="mt-5">
    <FormsDropdown
            name="priority"
            label="Priorité"
            list="{lists.priorityList}"
            value="{priority}"/>
    </div>
    <!--Machine type-->
    <div class="mt-5">
    <FormsDropdown label="Parc"
                   name="parc"
                   value="{parc}"
                   list="{lists.parcList}"/>
    </div>
    <!--Problem type-->
    <div class="mt-5">
    <FormsDropdown label="Type"
                   name="type"
                   value="{type}"
                   list="{lists.typeList}"/>
    </div>
    <!--Intervention Address-->
    <div class="mt-5">
    <FormsTextarea label="Lieu"
                   name="lieu"
                   rows="5"
                   cols="33"
                   value="{address}"/>
    </div>
    <div class="ml-3">
<!--Request Date & Time-->
<!--            <div class="text-sm ml-2 mt-3">Demande du 25/11/2022 11:49</div>-->
<!--Intervention Start (indicative) Date & Time -->
<!--            <div class="text-sm ml-2">Intervention</div>-->
<!--            <div class="text-sm flex flex-row">-->
<!--                <p class="ml-10 w-1/4">Début</p>-->
<!--                <p class="w-3/4">26/11/2022 12:00</p>-->
<!--            </div>-->
<!--            <div class="text-sm flex flex-row">-->
<!--                <p class="ml-10 w-1/4">Fin</p>-->
<!--                <p class="w-3/4">26/11/2022 17:00</p>-->
<!--            </div>-->
    </div>

    <footer class="w-full flex justify-center mt-3">
        <input class="border-2 p-3 rounded-md bg-Blue-300 text-White" type="submit" value="Sauvegarder"/>
    </footer>
</form>