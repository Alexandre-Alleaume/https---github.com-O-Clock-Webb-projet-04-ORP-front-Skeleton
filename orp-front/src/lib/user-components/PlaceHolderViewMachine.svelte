<script>
	export let filterId = 0;

	const deviceFiltered = {
		id: 1,
		engine_type: 'Tracteur',
		brand: 'John Deere',
		model: '6250R',
		serial_number: '1234567890',
		client_reference_number: '24',
		code_owner: '4',
		code_creator: '2'
	};

	const ownerName = 'Jeremy Le Boulch';
	const ownerAddress = "15 Rue de l'Abbaye";
</script>

<div class="space-y-2">
	{#if filterId == 0}
		<div class="card h-40 flex flex-row items-center justify-center">
			<p class="text-center font-bold text-md">
				Sélectionner un client puis une machine pour l'afficher ici
			</p>
		</div>
	{/if}

	{#if filterId > 0}
		<div class="block card card-hover p-4 space-y-5">
			<header class="card-header">
				<div class="flex flex-row justify-between">
					<h3 class="h3">Machine #{deviceFiltered.id}</h3>
					<div>
						<span class="chip variant-filled"
							>Parc client #{deviceFiltered.client_reference_number}</span
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
					<p>Type: {deviceFiltered.engine_type}</p>
					<p>Modèle: {deviceFiltered.model}</p>
					<p>Numéro de série: {deviceFiltered.serial_number}</p>
				</article>

				<div class="space-y-2">
					<article>
						<header><h4 class="font-bold">Détails du propriétaire:</h4></header>
						<p>{ownerName}</p>
						<p>{ownerAddress}</p>
					</article>
					<div>
						<article>
							<header><h4 class="font-bold">Localisation</h4></header>

							<p>{ownerAddress}</p>
						</article>
					</div>
				</div>
			</section>
		</div>
	{/if}
</div>
