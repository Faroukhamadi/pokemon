<script>
	import { goto } from '$app/navigation';
</script>

<h1 on:click={() => goto('/')}>Pokey Land</h1>

<style>
	h1 {
		text-align: center;
		font-size: 6rem;
		font-weight: 900;
		color: var(--accent-color);
		cursor: pointer;
		width: fit-content;
		margin-left: auto;
		margin-right: auto;
	}
</style>
