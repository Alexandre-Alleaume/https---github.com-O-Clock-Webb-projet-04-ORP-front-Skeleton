<script>
	// @ts-nocheck
	import DevicePreview from '$lib/user-components/DevicePreview.svelte';
	import PageTitle from '$lib/user-components/PageTitle.svelte';
	import SearchBar from '$lib/user-components/SearchBar.svelte';
	import SearchBar2 from '$lib/user-components/SearchBar2.svelte';

	const pageTitle = 'Votre Parc';
	const page = 'listDevices';

	let filterId = 0;

	const filterDevices = (event) => {
		filterId = event.detail;
	};
	export let data;
	const { devices } = data;
</script>

<div class="flex flex-col items-center justify-center w-screen">
	<div
		class="h-[85vh] card p-4 variant-ghost-surface m-10 min-w-[50%] overflow-auto flex flex-col items-center space-y-2"
	>
		<PageTitle title={pageTitle} />

		<SearchBar on:filter={filterDevices} {devices} {page} />
		<DevicePreview {filterId} {devices} {page} />
	</div>
</div>
