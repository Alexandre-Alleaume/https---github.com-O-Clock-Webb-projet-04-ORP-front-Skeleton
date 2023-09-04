<script>
// 1. Load the current url and the list of possible url
// 2. Get the name matching the current url to the title of the page
import { page } from '$app/stores';
import { pages } from './TabName.js';
const pageName = pages[$page.url.pathname];
</script>
<svelte:head>
    <title>O'RP - {pageName}</title>
</svelte:head>
