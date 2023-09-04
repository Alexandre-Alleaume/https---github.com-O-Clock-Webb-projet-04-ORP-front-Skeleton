<script>
	const tickets = [
		{
			id: 1,
			created_at: '23 Janvier 2024',
			emergency_degree: '5',
			code_machine: '17'
		}
	];
</script>

{#each tickets as ticket}
	<a class="block card card-hover p-4 space-y-5" href="/elements/cards">
		<header>
			<div class="flex flex-row justify-between">
				<h3 class="h3">Ticket <span>#{ticket.id}</span></h3>
				<div>
					<span class="chip variant-filled-warning">{ticket.emergency_degree}</span>
				</div>
			</div>
		</header>
		<article class="space-y-2">
			<p class="text-sm">Demande d'intervention faite le: {ticket.created_at}</p>
			<p class="text-sm">Machine {ticket.code_machine}</p>
		</article>
		<footer class="card-footer flex flex-row justify-end">
			<span><i class="fa-solid fa-plus" /></span>
		</footer>
	</a>
{/each}
