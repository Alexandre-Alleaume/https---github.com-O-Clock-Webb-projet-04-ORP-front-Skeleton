<script>
	// @ts-nocheck
	import { Ratings } from '@skeletonlabs/skeleton';

	const value = {
		current: 3,
		max: 5
	};

	function iconClick(event) {
		value.current = event.detail.index;
	}
</script>

<input class="hidden" type="number" name="grade" bind:value={value.current} />

<Ratings
	bind:value={value.current}
	max={value.max}
	interactive
	on:icon={iconClick}
	class="text-3xl"
>
	<svelte:fragment slot="empty"><i class="fa-regular fa-star" /></svelte:fragment>
	<svelte:fragment slot="half"><i class="fa-solid fa-star-half-stroke" /></svelte:fragment>
	<svelte:fragment slot="full"><i class="fa-solid fa-star" /></svelte:fragment>
</Ratings>
