<script>
	// @ts-nocheck
	import TicketPreview from './TicketPreview.svelte';
	export let tickets = [];
	export let tickeIdFilter;
	export let statusFilter;
	export let page;
	$: console.log(tickeIdFilter);
	$: console.log(statusFilter);
</script>

<div class="space-y-2">
	<TicketPreview {tickets} {tickeIdFilter} {statusFilter} {page} />
</div>
