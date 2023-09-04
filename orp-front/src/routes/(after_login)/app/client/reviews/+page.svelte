<script>
	// @ts-nocheck

	import { Modal, getModalStore } from '@skeletonlabs/skeleton';
	const modalStore = getModalStore();

	import PageTitle from '$lib/user-components/PageTitle.svelte';
	import PlaceHolderTicket from '$lib/user-components/PlaceHolderTicket.svelte';
	import ReviewBottom from '$lib/user-components/ReviewBottom.svelte';
	import ReviewField from '$lib/user-components/ReviewField.svelte';
	import ReviewRating from '$lib/user-components/ReviewRating.svelte';
	import SearchBar2 from '$lib/user-components/SearchBar2.svelte';
	import TicketListContent from '$lib/user-components/TicketListContent.svelte';
	import TicketPreview from '$lib/user-components/TicketPreview.svelte';
	import TicketReviewsBottom from '$lib/user-components/TicketReviewsBottom.svelte';
	import { fade } from 'svelte/transition';
	const pageTitle = 'Reviews';
	export let data;
export let form

	const { tickets } = data;
	let tickeIdFilter;
	let page = 'reviews';
	const filterTicket = (event) => {
		tickeIdFilter = event.detail.id;
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

<div class="flex flex-col items-center justify-center w-screen my-2">
	<div class="h-[85vh] card p-4 variant-ghost-surface m-10 min-w-[50%] overflow-auto space-y-2">
		<PageTitle title={pageTitle} />
		<SearchBar2 {tickets} {page} on:filter={filterTicket} />
		<TicketListContent {tickets} {tickeIdFilter} {page} />
		{#if tickeIdFilter}
			<div transition:fade|local={{ duration: 200 }}>
				<TicketReviewsBottom {tickeIdFilter} />
			</div>
		{/if}
	</div>
</div>
