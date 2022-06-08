<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import { query, resolved } from '../gqless';

	export const load: Load = async () => {
		return {
			props: {
				data: await resolved(() => {
					return query.pokemon({ name: 'Machop' })?.id;
				}).then((data) => {
					console.log('data: ', data);
				})
			}
		};
	};
</script>

<script lang="ts">
	export let data: any;
	console.log('data: ', data);
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
