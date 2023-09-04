<script>
	// @ts-nocheck
	import { createEventDispatcher } from 'svelte';
	import SearchBar2 from './SearchBar2.svelte';
	import SelectMenu from './SelectMenu.svelte';

	const dispatch = createEventDispatcher();
	export let tickets = [];
</script>

<div class="flex flex-col lg:flex-row justify-between items-center space-y-2 lg:space-y-0">
	<SearchBar2 {tickets} on:filter />
	<SelectMenu on:filterByStatus />
</div>
