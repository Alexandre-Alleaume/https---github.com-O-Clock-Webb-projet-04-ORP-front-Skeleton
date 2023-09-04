<script>
	// @ts-nocheck
	import { createEventDispatcher } from 'svelte';
	import PageTitle from '$lib/user-components/PageTitle.svelte';
	import SearchBar2 from '$lib/user-components/SearchBar2.svelte';
	import TicketListContent from '$lib/user-components/TicketListContent.svelte';
	import TicketListHeader from '$lib/user-components/TicketListHeader.svelte';
	import TicketPreview from '$lib/user-components/TicketPreview.svelte';
	const dispatch = createEventDispatcher();
	const title = 'Mes tickets';
	export let data;
	const { tickets } = data;
	let tickeIdFilter;
	let statusFilter;
	let page = 'list';
	const filterTicket = (event) => {
		tickeIdFilter = event.detail.id;
	};
	const filterByStatus = (event) => {
		statusFilter = event.detail.status;
	};
</script>

<div class="flex flex-col items-center justify-center w-screen">
	<div class="h-[85vh] card p-4 variant-ghost-surface m-10 min-w-[50%] overflow-auto">
		<header class="card-header space-y-10">
			<PageTitle {title} /><TicketListHeader
				{tickets}
				on:filter={filterTicket}
				on:filterByStatus={filterByStatus}
			/>
		</header>
		<section class="p-4">
			<TicketListContent {tickets} {tickeIdFilter} {statusFilter} {page} />
		</section>
	</div>
</div>
