<script>
    import Modal from '$lib/generic/Modal.svelte';

    export let ticketID;
    export let showModal = false;
</script>

<Modal bind:showModal>
    <h2 slot="header">
        Suppression du ticket {ticketID}
    </h2>

    <div class="flex flex-row flex-wrap justify-between">
        <p class="w-full">Êtes vous sur de vouloir supprimer le ticket {ticketID}</p>
        <button>Oui</button>
        <button>Non</button>
    </div>
</Modal>
