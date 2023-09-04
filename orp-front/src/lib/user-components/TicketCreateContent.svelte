<script>
	// @ts-nocheck
	import DevicePreview from '$lib/user-components/DevicePreview.svelte';
	export let filterId = 0;
	export let devices = [];
	export let page;
</script>

<input type="hidden" hidden value={filterId} name="code_machine" />

<div class="space-y-2">
	<DevicePreview {filterId} {devices} {page} />

	<label class="label">
		<span class="text-md font-bold">Description du probléme</span>
		<textarea
			class="textarea"
			rows="4"
			placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit."
			name="comments"
		/>
	</label>

	<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
		<div class="input-group-shim"><i class="fa-solid fa-location-dot" /></div>
		<input type="text" placeholder="Indiquer la localisation" name="location" />
	</div>
</div>
