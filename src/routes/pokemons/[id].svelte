<script lang="ts">
	import type { Pokemon } from '../../gqless';
	type PokemonResponse = Pick<Pokemon, 'name' | 'image' | 'maxHP' | 'weight' | 'classification'>;

	export let data: PokemonResponse;
</script>

<div>
	<img src={data.image} alt="pokemon-card" />
	<p>Name: {data.name}</p>
	<p>Max HP: {data.maxHP}</p>
	<p>Weight: {data.weight}</p>
	<p>Classification: {data.classification}</p>
</div>

<style>
	div {
		padding: 6px;
		border: 1px solid black;
		width: fit-content;
		margin-left: auto;
		margin-right: auto;
	}
	p {
		cursor: default;
		color: var(--text-color);
		font-size: 2.3rem;
		font-style: italic;
		text-decoration: underline;
		margin-top: 20px;
		margin-bottom: 20px;
	}
</style>
