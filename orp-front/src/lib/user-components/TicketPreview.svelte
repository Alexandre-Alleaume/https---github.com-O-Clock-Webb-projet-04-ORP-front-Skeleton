<script>
	// @ts-nocheck

	import { getModalStore } from '@skeletonlabs/skeleton';

	const modalStore = getModalStore();

	import ModalTicket from './ModalTicket.svelte';

	export let tickeIdFilter = 0;
	export let statusFilter = 0;
	export let tickets = [];
	export let page;

	let ticketFiltered = [];

	const showModal = (id) => {
		let ticket_id = id;
		console.log(ticket_id);
		const modalComponent = {
			ref: ModalTicket,
			props: { tickets, ticket_id }
		};

		const modal = {
			type: 'component',
			component: modalComponent
		};

		ticket_id = id;
		modalStore.trigger(modal);
	};
	console.log(tickets);

	$: ticketFiltered = tickets.filter((element) => element.ticket_id == tickeIdFilter);
	$: console.log(ticketFiltered);

	let statusWording = '';

	$: if (statusFilter == 1) {
		statusWording = 'open';
	} else if (statusFilter == 2) {
		statusWording = 'in_progress';
	} else if (statusFilter == 3) {
		statusWording = 'closed';
	}

	$: ticketFilteredByStatus = tickets.filter((element) => element.status == statusWording);
</script>

{#if page == 'list'}
	{#if tickets.length == 0}
		<p>Vous n'avez pas encore de tickets...</p>
	{:else if tickeIdFilter == 0 && statusFilter == 0}
		{#each tickets as ticket}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<div class=" card card-hover p-4 space-y-2" on:click={() => showModal(ticket.ticket_id)}>
				<div class="flex flex-col border-b">
					<div class="flex flex-row justify-between">
						<h3 class="h3">Ticket <span>#{ticket.ticket_id}</span></h3>
						<div>
							<span class="chip variant-filled-warning">{ticket.emergency_degree}</span>
						</div>
					</div>
					<div class="flex flex-row justify-between text-xs">
						<p>Type: {ticket.code_type}</p>
						<p>Status: {ticket.status}</p>
					</div>
				</div>

				<article>
					<p class="tex-md">Demande d'intervention faite le: {ticket.created_at}</p>
					<p class="text-md">Machine {ticket.code_machine}</p>
				</article>
				<footer class="card-footer flex flex-row justify-end">
					<span><i class="fa-solid fa-plus" /></span>
				</footer>
			</div>
		{/each}
	{:else if tickeIdFilter == 0 && statusFilter}
		{#each ticketFilteredByStatus as ticket}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<div class=" card card-hover p-4 space-y-2" on:click={() => showModal(ticket.ticket_id)}>
				<div class="flex flex-col border-b">
					<div class="flex flex-row justify-between">
						<h3 class="h3">Ticket <span>#{ticket.ticket_id}</span></h3>
						<div>
							<span class="chip variant-filled-warning">{ticket.emergency_degree}</span>
						</div>
					</div>
					<div class="flex flex-row justify-between text-xs">
						<p>Type: {ticket.code_type}</p>
						<p>Status: {ticket.status}</p>
					</div>
				</div>

				<article>
					<p class="tex-md">Demande d'intervention faite le: {ticket.created_at}</p>
					<p class="text-md">Machine {ticket.code_machine}</p>
				</article>
				<footer class="card-footer flex flex-row justify-end">
					<span><i class="fa-solid fa-plus" /></span>
				</footer>
			</div>
		{/each}
	{:else if tickeIdFilter != 0}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class=" card card-hover p-4 space-y-2"
			on:click={() => showModal(ticketFiltered[0].ticket_id)}
		>
			<div class="flex flex-col border-b">
				<div class="flex flex-row justify-between">
					<h3 class="h3">Ticket <span>#{ticketFiltered[0].ticket_id}</span></h3>
					<div>
						<span class="chip variant-filled-warning">{ticketFiltered[0].emergency_degree}</span>
					</div>
				</div>
				<div class="flex flex-row justify-between text-xs">
					<p>Type: {ticketFiltered[0].code_type}</p>
					<p>Status: {ticketFiltered[0].status}</p>
				</div>
			</div>

			<article>
				<p class="tex-md">Demande d'intervention faite le: {ticketFiltered[0].created_at}</p>
				<p class="text-md">Machine {ticketFiltered[0].code_machine}</p>
			</article>
			<footer class="card-footer flex flex-row justify-end">
				<span><i class="fa-solid fa-plus" /></span>
			</footer>
		</div>
	{/if}
{/if}

{#if page == 'reviews'}
	{#if tickeIdFilter !== 0}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class=" card card-hover p-4 space-y-2"
			on:click={() => showModal(ticketFiltered[0].ticket_id)}
		>
			<div class="flex flex-col border-b">
				<div class="flex flex-row justify-between">
					<h3 class="h3">Ticket <span>#{ticketFiltered[0].ticket_id}</span></h3>
					<div>
						<span class="chip variant-filled-warning">{ticketFiltered[0].emergency_degree}</span>
					</div>
				</div>
				<div class="flex flex-row justify-between text-xs">
					<p>Type: {ticketFiltered[0].code_type}</p>
					<p>Status: {ticketFiltered[0].status}</p>
				</div>
			</div>

			<article>
				<p class="tex-md">Demande d'intervention faite le: {ticketFiltered[0].created_at}</p>
				<p class="text-md">Machine {ticketFiltered[0].code_machine}</p>
			</article>
			<footer class="card-footer flex flex-row justify-end">
				<span><i class="fa-solid fa-plus" /></span>
			</footer>
		</div>
	{/if}
{/if}
