<script>
	import { AppBar } from '@skeletonlabs/skeleton';
	import "$sass/main.scss";
</script>

<header
	class=" header flex flex-row justify-between bg-surface-100-800-token space-y-4 p-4 shadow-xl items-center"
>
	<div class="flex flex-row space-x-2">
		<button type="button">
			<i class="fa-solid fa-bell" />
		</button>
		<button type="button">
			<i class="fa-solid fa-user" />
		</button>
	</div>
</header>

<!--<AppBar>-->
<!--	<svelte:fragment slot="lead"></svelte:fragment>-->

<!--	<svelte:fragment slot="trail">-->
<!--		<button type="button">-->
<!--			<i class="fa-solid fa-bell" />-->
<!--		</button>-->
<!--		<button type="button">-->
<!--			<i class="fa-solid fa-user" />-->
<!--		</button>-->
<!--	</svelte:fragment>-->
<!--</AppBar>-->

<style>
	.header {
		background-color: #dbdee9;
	}
</style>
