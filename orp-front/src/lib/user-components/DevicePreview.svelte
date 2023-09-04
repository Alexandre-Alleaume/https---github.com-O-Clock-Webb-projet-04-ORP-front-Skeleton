<script>
	// @ts-nocheck
	export let filterId = 0;
	export let page;
	let deviceFiltered = [];

	$: console.log(filterId);

	export let devices = [];

	$: if (filterId > 0) {
		deviceFiltered = devices.filter((element) => element.devices_id == filterId);
	}
	console.log(deviceFiltered);
</script>

{#if page == 'listDevices'}
	<div class="space-y-2">
		{#if devices.length == 0}
			<div class=" card p-4 space-y-5 text-center">
				<p>Vous n'avez pas encore de machine dans votre parc...</p>
			</div>
		{:else}
			{#if filterId == 0}
				{#each devices as device}
					<div class="block card p-4 space-y-5">
						<header class="card-header">
							<div class="flex flex-col items-center lg:flex-row lg:justify-between">
								<h3 class="h3">Machine #{device.devices_id}</h3>
								<div>
									<span class="chip variant-filled"
										>Parc client #{device.client_reference_number}</span
									>
								</div>
							</div>
						</header>
						<hr />
						<section class=" flex flex-col lg:flex-row lg:space-x-10 space-y-5">
							<article
								class="lg:border-r lg:border-surface-500/30 flex flex-col items-center justify-center lg:pr-4 space-y-2"
							>
								<header><h4 class="font-bold">Détails de la machine:</h4></header>
								<p>Type: {device.engine_type}</p>
								<p>Modèle: {device.model}</p>
								<p>Numéro de série: {device.serial_number}</p>
							</article>

							<div class="space-y-2">
								<article class="flex flex-col items-center r">
									<header><h4 class="font-bold">Détails du propriéataire:</h4></header>
									<p>{device.first_name} {device.last_name}</p>
									<p>{device.address}</p>
								</article>
								<div>
									<article class="flex flex-col items-center">
										<header><h4 class="font-bold">Localisation:</h4></header>

										<p>{device.address}</p>
									</article>
								</div>
							</div>
						</section>
						<footer class="card-footer flex flex-row justify-end">
							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<!-- svelte-ignore a11y-no-static-element-interactions -->
							<span><i class="fa-solid fa-plus" /></span>
						</footer>
					</div>
				{/each}
			{/if}

			{#if filterId > 0}
				<div class="block card p-4 space-y-5">
					<header class="card-header">
						<div class="flex flex-row justify-between">
							<h3 class="h3">Machine #{deviceFiltered[0].devices_id}</h3>
							<div>
								<span class="chip variant-filled"
									>Parc client #{deviceFiltered[0].client_reference_number}</span
								>
							</div>
						</div>
					</header>
					<hr />
					<section class=" flex flex-row space-x-10">
						<article
							class="border-r border-surface-500/30 flex flex-col items-center justify-center pr-4 space-y-2"
						>
							<header><h4 class="font-bold">Détails de la machine:</h4></header>
							<p>Type: {deviceFiltered[0].engine_type}</p>
							<p>Modèle: {deviceFiltered[0].model}</p>
							<p>Numéro de série: {deviceFiltered[0].serial_number}</p>
						</article>

						<div class="space-y-2">
							<article>
								<header><h4 class="font-bold">Détails du propriéataire:</h4></header>
								<p>{deviceFiltered[0].first_name} {deviceFiltered[0].last_name}</p>
								<p>{deviceFiltered[0].address}</p>
							</article>
							<div>
								<article>
									<header><h4 class="font-bold">Localisation</h4></header>

									<p>{deviceFiltered[0].address}</p>
								</article>
							</div>
						</div>
					</section>
					<footer class="card-footer flex flex-row justify-end">
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<!-- svelte-ignore a11y-no-static-element-interactions -->
						<span><i class="fa-solid fa-plus" /></span>
					</footer>
				</div>
			{/if}
		{/if}
	</div>
{/if}

{#if page == 'createTicket'}
	{#if devices.length == 0}
		<div class=" card p-4 space-y-5 text-center">
			<p>Vous n'avez pas encore de machine dans votre parc...</p>
		</div>
	{:else}
		{#if filterId == 0}
			<div class=" card p-4 space-y-5 text-center">
				<p>Selectionnez une machine pour déclarer un incident...</p>
			</div>
		{/if}

		{#if filterId > 0}
			<div class="block card p-4 space-y-5">
				<header class="card-header">
					<div class="flex flex-row justify-between">
						<h3 class="h3">Machine #{deviceFiltered[0].devices_id}</h3>
						<div>
							<span class="chip variant-filled"
								>Parc client #{deviceFiltered[0].client_reference_number}</span
							>
						</div>
					</div>
				</header>
				<hr />
				<section class=" flex flex-row space-x-10">
					<article
						class="border-r border-surface-500/30 flex flex-col items-center justify-center pr-4 space-y-2"
					>
						<header><h4 class="font-bold">Détails de la machine:</h4></header>
						<p>Type: {deviceFiltered[0].engine_type}</p>
						<p>Modèle: {deviceFiltered[0].model}</p>
						<p>Numéro de série: {deviceFiltered[0].serial_number}</p>
					</article>

					<div class="space-y-2">
						<article>
							<header><h4 class="font-bold">Détails du propriéataire:</h4></header>
							<p>{deviceFiltered[0].first_name}</p>
							<p>{deviceFiltered[0].last_name}</p>
						</article>
						<div>
							<article>
								<header><h4 class="font-bold">Localisation</h4></header>

								<p>{deviceFiltered[0].address}</p>
							</article>
						</div>
					</div>
				</section>
				<footer class="card-footer flex flex-row justify-end">
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<!-- svelte-ignore a11y-no-static-element-interactions -->
					<span><i class="fa-solid fa-plus" /></span>
				</footer>
			</div>
		{/if}
	{/if}
{/if}
