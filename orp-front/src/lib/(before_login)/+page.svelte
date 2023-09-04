<!-- <script>
	// Immediately forward to the login page
	import { onMount } from 'svelte';

	onMount(() => {
		location.href = '/login';
	});
</script> -->

<script>
	import { getModalStore } from '@skeletonlabs/skeleton';

	const modalStore = getModalStore();

	const modal = {
		type: 'alert',
		// Data
		title: 'Example Alert'
	};
	modalStore.trigger(modal);
</script>

<h1>hello</h1>
