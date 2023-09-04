<script>
	// @ts-nocheck
	export let content;


	let icon;
	let type;

	if (content == 'delete') {
		type = 'reset';
	} else if (content == 'validate') {
		type = 'submit';
	}

	const typeIcon = {
		validate: ['fa-solid fa-paper-plane', 'Envoyer', 'btn variant-filled-tertiary'],
		delete: ['fa-solid fa-x', 'Annuler', 'btn variant-filled-error']
	};

	for (let key in typeIcon) {
		if ((key = content)) {
			icon = typeIcon[key];
		}
	}
</script>




<button {type} class={icon[2]}>
	<span><i class={icon[0]} /></span>
	<span>{icon[1]}</span>
</button>
