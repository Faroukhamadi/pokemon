<script lang="ts">
	import '../app.css';
	import Header from '$lib/Header.svelte';
</script>

<Header />

<main>
	<slot />
</main>

<style>
	h3 {
		font-family: var(--font-mono);
	}
</style>
