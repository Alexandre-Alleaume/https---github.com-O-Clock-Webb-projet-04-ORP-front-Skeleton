<script>
	// @ts-nocheck
	/* This will contains all of the devices of the user's parc. The label is the name and the brand but the value is the id, category can be the engine type */

	export let devices = [];

	export let page;

	let searchBarPrefill = [];

	if (page == 'listDevices') {
		searchBarPrefill = [{ label: 'All Devices', value: '0' }];
	} else if (page == 'createTicket') {
		searchBarPrefill = [{ label: 'Machine non sélectionnée', value: '0' }];
	}

	devices.forEach((element) => {
		searchBarPrefill.push({
			label: `${element.engine_type} ${element.brand}`,
			value: `${element.devices_id}`
		});
	});

	console.log(searchBarPrefill);

	import { createEventDispatcher } from 'svelte';

	import { Autocomplete } from '@skeletonlabs/skeleton';
	import { popup } from '@skeletonlabs/skeleton';

	let popupSettings = {
		event: 'focus-click',
		target: 'popupAutocomplete',
		placement: 'bottom'
	};

	let inputPopup = '';

	const dispatch = createEventDispatcher();

	const onDeviceSelection = (event) => {
		inputPopup = event.detail.label;
		dispatch('filter', event.detail.value);
	};
</script>

<input
	class="input autocomplete"
	type="search"
	name="autocomplete-search"
	bind:value={inputPopup}
	placeholder="Search..."
	use:popup={popupSettings}
/>
<div data-popup="popupAutocomplete">
	<Autocomplete
		bind:input={inputPopup}
		options={searchBarPrefill}
		on:selection={onDeviceSelection}
		class="card w-full max-w-sm max-h-28 p-4 overflow-y-auto -mt-10"
	/>
</div>
