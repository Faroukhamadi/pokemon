<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch }) => {
		const url = 'https://pokeapi.co/api/v2/pokemon/ditto';
		const response = await fetch(url);
		return {
			status: response.status,
			props: {
				ditto: response.ok && (await response.json())
			}
		};
	};
</script>

<script lang="ts">
	export let ditto: any;
	console.log(ditto);
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<main>
	<h1>Hello World</h1>
</main>

<style>
	h1 {
		width: 100%;
	}
</style>
