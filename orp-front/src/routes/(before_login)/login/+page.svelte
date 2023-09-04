<script>
	// @ts-nocheck
	import { getModalStore } from '@skeletonlabs/skeleton';

	const modalStore = getModalStore();

	import { fade } from 'svelte/transition';
	import { enhance } from '$app/forms';
	export let form;

	const closeWarning = () => {
		console.log(form);
		form.error = false;
		console.log(form);
	};
</script>

<div class="flex flex-col items-center justify-center w-screen space-y-20 h-screen">
	<img src="/logo.svg" alt="logo ORP" title="Logo ORP" class="h-1/6" />

	<form method="POST" action="?/login" use:enhance class="card w-3/4 lg:w-1/2 overflow-auto">
		<header class="card-header flex flex-row justify-center">
			<h1 class="text-2xl font-bold">Bienvenue chez O'RP</h1>
		</header>
		<section class="p-4 space-y-2 max-w-xl mx-auto">
			<label class="label">
				<span>E-mail</span>
				<input
					class="input"
					type="email"
					placeholder="Email"
					name="email"
					value={form?.email ?? ''}
				/>
			</label>

			<label class="label">
				<span>Mot de passe</span>
				<input
					class="input"
					type="password"
					name="password"
					placeholder="Mot de Passe"
					value={form?.password ?? ''}
				/>
			</label>
			<div class="flex flex-row justify-items-end">
				<p class="text-sm">Mot de passe oublié ?</p>
			</div>
			{#if form?.error}
				<aside
					class="alert variant-filled-error max-w-xl"
					transition:fade|local={{ duration: 200 }}
				>
					<div><i class="fa-solid fa-triangle-exclamation text-3xl" /></div>
					<!-- Message -->
					<div class="alert-message">
						<p>{form?.message ?? ''}</p>
					</div>
					<!-- Actions -->
					<div class="alert-actions">
						<button type="button" class="btn-icon" on:click={closeWarning}
							><i class="fa-solid fa-circle-xmark text-3xl" /></button
						>
					</div>
				</aside>
			{/if}
		</section>

		<footer class="card-footer flex flex-col items-center space-y-2 max-w-xl mx-auto">
			<button class="btn variant-filled-secondary">
				<span><i class="fa-solid fa-right-to-bracket" /></span>
				<span>Se Connecter</span>
			</button>

			<label class="flex items-center space-x-2">
				<input class="checkbox" type="checkbox" checked />
				<p class="text-sm">Se souvenir de moi</p>
			</label>
		</footer>
	</form>
</div>
