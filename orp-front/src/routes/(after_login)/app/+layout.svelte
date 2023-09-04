<script>
	import NavBar from '$lib/NavBar.svelte';
	import { AppShell } from '@skeletonlabs/skeleton';
	import { AppBar } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	
</script>



<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">Logo ORP svg</svelte:fragment>
			
			<svelte:fragment slot="trail">
				<div class="flex flex-row space-x-5">
					<LightSwitch class=" bgDark" />
					<button type="button">
						<i class="fa-solid fa-bell" />
					</button>
					<button type="button">
						<i class="fa-solid fa-user" />
					</button>
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<slot />
</AppShell>
