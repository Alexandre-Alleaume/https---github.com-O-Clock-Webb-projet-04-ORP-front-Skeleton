<script>
	// @ts-nocheck
	import { createEventDispatcher } from 'svelte';
	import { Autocomplete } from '@skeletonlabs/skeleton';
	import { popup } from '@skeletonlabs/skeleton';
	export let tickets = [];
	export let page;
	let placeholder = 'Rechercher...';

	const dispatch = createEventDispatcher();

	let searchBarPrefill = [{ label: 'All Tickets', value: '0' }];

	tickets.forEach((element) => {
		searchBarPrefill.push({
			label: `Ticket #${element.ticket_id}`,
			value: `${element.ticket_id}`
		});
	});

	let popupSettings = {
		event: 'focus-click',
		target: 'popupAutocomplete',
		placement: 'bottom'
	};

	let inputPopup = '';

	function onTicketSelection(event) {
		inputPopup = event.detail.label;
		dispatch('filter', { id: event.detail.value });
	}

	if (page == 'reviews') {
		placeholder = 'Rechercher un ticket pour le noter...';
	}
</script>

<input
	class="input autocomplete max-w-[50%] min-w-fit"
	type="search"
	name="autocomplete-search"
	bind:value={inputPopup}
	{placeholder}
	use:popup={popupSettings}
/>
<div data-popup="popupAutocomplete">
	<Autocomplete
		bind:input={inputPopup}
		options={searchBarPrefill}
		on:selection={onTicketSelection}
		class="card w-full max-w-sm max-h-28 p-4 overflow-y-auto"
	/>
</div>
