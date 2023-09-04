<script>
	// @ts-nocheck

	import { Modal, getModalStore } from '@skeletonlabs/skeleton';
	const modalStore = getModalStore();
	import TicketCreateHeader from '$lib/user-components/TicketCreateHeader.svelte';
	import PageTitle from '$lib/user-components/PageTitle.svelte';
	import TicketCreateContent from '$lib/user-components/TicketCreateContent.svelte';
	import TicketCreateBottom from '$lib/user-components/TicketCreateBottom.svelte';
	import { enhance } from '$app/forms';
	export let data;
	
	export let form;


	const { devices } = data;

	const title = 'Nouveau Ticket';
	const page = 'createTicket';

	let filterId = 0;

	$: console.log(filterId);


	const filterDevices = (event) => {
		filterId = event.detail;
	};

	let modal = {
		type: 'alert'
	};


	$: modal = {
		type: 'alert',
		// Data
		body: `${form?.message}`,
		buttonTextCancel: `Retour`
	};

	$: if (form?.success) {
		modalStore.trigger(modal);
	}

</script>

<div class="flex flex-col items-center justify-center w-screen">
	<form
		method="POST"
		action="?/create"
		use:enhance
		class="h-[85vh] card p-4 variant-ghost-surface m-10 min-w-[50%] overflow-auto"
	>
		<header class="card-header space-y-10">
			<PageTitle {title} />
			<TicketCreateHeader {devices} on:filter={filterDevices} {page} />
		</header>
		<section class="p-4">
			<TicketCreateContent {devices} {filterId} {page} />
		</section>
		<footer class="card-footer"><TicketCreateBottom /></footer>
	</form>
</div>
