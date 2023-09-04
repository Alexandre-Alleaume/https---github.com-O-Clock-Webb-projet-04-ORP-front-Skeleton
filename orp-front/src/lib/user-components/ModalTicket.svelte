<script>
	// @ts-nocheck
	export let tickets = [];
	export let ticket_id;
	console.log(ticket_id);

	const ticketToDisplay = tickets.filter((element) => element.ticket_id == ticket_id);
	console.log(ticketToDisplay);
</script>

<article class="card p-4 space-y-2" href="/elements/cards">
	<div class="flex flex-col pb-3 border-b">
		<div class="flex flex-row justify-between">
			<h3 class="h3">Ticket <span>#{ticketToDisplay[0].ticket_id}</span></h3>
			<div>
				<span class="chip variant-filled-warning">{ticketToDisplay[0].emergency_degree}</span>
			</div>
		</div>
		<div class="flex flex-row justify-between text-xs">
			<p>Type: {ticketToDisplay[0].code_type}</p>
			<p>Status: {ticketToDisplay[0].status}</p>
		</div>
	</div>

	<div class="flex flex-row justify-between pb-3 border-b">
		<div class="w-1/2 border-r">
			<h5 class="h5">
				<span><i class="fa-solid fa-user text-md" /></span>
				<span class="underline underline-offset-4"> Détails Clients</span>
			</h5>
			<p>Prénom: {ticketToDisplay[0].first_name}</p>
			<p>Nom: {ticketToDisplay[0].last_name}</p>
			<p><i class="fa-solid fa-location-dot text-sm" /> {ticketToDisplay[0].address}</p>
		</div>
		<div class="w-1/2 pl-4">
			<h5 class="h5">
				<span><i class="fa-solid fa-wrench" /></span>
				<span class="underline underline-offset-4"> Détails Machine</span>
			</h5>
			<p>Machine #{ticketToDisplay[0].code_machine}</p>
			<p>Marque</p>
			<p>Modèle</p>
		</div>
	</div>

	<div class="flex flex-col justify-between pb-3 border-b space-y-2">
		<h5 class="h5 underline underline-offset-4">Description du probléme</h5>
		<div class="card h-48 variant-ghost-surface p-4">{ticketToDisplay[0].comments}</div>
	</div>

	<div class="flex flex-col justify-between pb-3 space-y-2">
		<h5 class="h5">
			<span><i class="fa-solid fa-screwdriver-wrench" /></span>
			<span class="underline underline-offset-4">Prise en charge</span>
		</h5>

		<div class="flex flex-row justify-between">
			<p><i class="fa-solid fa-calendar-days" /> {ticketToDisplay[0].intervention_date}</p>
			<p><i class="fa-solid fa-clock" /> {ticketToDisplay[0].intervention_time}</p>
		</div>
	</div>
</article>
