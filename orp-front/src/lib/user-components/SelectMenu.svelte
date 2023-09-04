<script>
	// @ts-nocheck
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	let selectedValue = 0;
	const filterTicketStatus = () => {
		console.log(selectedValue);
		dispatch('filterByStatus', { status: selectedValue });
	};
</script>

<select
	class="select min-w-fit max-w-fit"
	bind:value={selectedValue}
	on:change={() => filterTicketStatus()}
>
	<option value="0">All</option>
	<option value="1">Ouvert</option>
	<option value="2">En cours</option>
	<option value="3">Résolu</option>
</select>
