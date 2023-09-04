<script>
	// @ts-nocheck
	import ReviewBottom from './ReviewBottom.svelte';
	import ReviewField from './ReviewField.svelte';
	import ReviewRating from './ReviewRating.svelte';
	import { enhance } from '$app/forms';
	export let tickeIdFilter;

	console.log(tickeIdFilter);
</script>

<form method="POST" action="?/reviews" use:enhance>
	<input type="hidden" name="code_ticket" hidden value={tickeIdFilter} />
	<ReviewField />
	<ReviewRating />
	<ReviewBottom />
</form>
