<script>
	// @ts-nocheck
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let devices;
	export let page;

	/* RATING LOGIC */
	import { Ratings } from '@skeletonlabs/skeleton';
	import SearchBar from './SearchBar.svelte';

	let value = { current: 3, max: 5 };

	let btnColor = 'color: #000000';

	function iconClick(event) {
		value.current = event.detail.index;
	}

	$: if (value.current >= 1 && value.current < 3) {
		btnColor = 'color: #84cc16';
	} else if (value.current >= 3 && value.current < 5) {
		btnColor = 'color: #EAB308;';
	} else if ((value.current = 5)) {
		btnColor = 'color: #D41976;';
	}
</script>

<!-- COMPONENT LOGIC -->

<!-- This components corresponding to the generic ticket creation page. Depending of the user varaiables (defaulted as client) it display differents fields. When connected as a technician, this component show an autocomplete search bar with all the clients. Once the client is selected we want the list of devices to be updated and corresponding to the one of the client selected. -->

<div class="flex flex-col lg:flex-row justify-between items-center space-y-2 lg:space-y-0">
	<div class="w-1/2">
		<SearchBar {devices} {page} on:filter />
	</div>

	<input type="hidden" hidden bind:value={value.current} name="emergency_degree" />

	<div class="flex flex-row justify-end space-x-2">
		<p>Urgence:</p>
		<Ratings bind:value={value.current} max={value.max} interactive on:icon={iconClick}>
			<svelte:fragment slot="empty"><i class="fa-regular fa-circle" /></svelte:fragment>
			<svelte:fragment slot="half"
				><i class="fa-solid fa-circle-half-stroke" style={btnColor} /></svelte:fragment
			>
			<svelte:fragment slot="full"
				><i class="fa-solid fa-circle" style={btnColor} /></svelte:fragment
			>
		</Ratings>
	</div>
</div>
