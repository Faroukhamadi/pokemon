<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import { query, resolved } from '../gqless';

	export const load: Load = async () => {
		return {
			props: {
				pokemons: await resolved(() => {
					return query.pokemons({ first: 12 })?.map((pokemon) => ({
						name: pokemon?.name,
						image: pokemon?.image,
						maxHP: pokemon?.maxHP
					}));
				})
			}
		};
	};
</script>

<script lang="ts">
	import type { Pokemon } from '../gqless';

	type PokemonResponse = Pick<Pokemon, 'name' | 'image' | 'maxHP'>;

	export let pokemons: PokemonResponse[];

	pokemons.forEach((pokemon, index) => {
		console.log(`pokemon ${index + 1} name: `, pokemon.name);
		console.log(`pokemon ${index + 1} image: `, pokemon.image);
		console.log(`pokemon ${index + 1} maxHP: `, pokemon.maxHP);
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<main>
	<h1>The Home for PokeAddicts</h1>
	<div class="card-container">
		{#each pokemons as { image, name, maxHP }}
			<div class="card">
				<img src={image} alt="pok" />
				<p>Name: {name}</p>
				<p>Max HP: {maxHP}</p>
			</div>
		{/each}
	</div>
</main>

<style>
	h1 {
		cursor: default;
		color: var(--text-color);
		font-size: 2.3rem;
		font-style: italic;
		text-decoration: underline;
		margin-top: 20px;
		margin-bottom: 20px;
	}
	.card-container {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
		grid-template-rows: repeat(3, 250px);
		grid-auto-flow: column;
		gap: 12px;
	}

	p {
		color: white;
		font-family: var(--font-mono);
		margin: 7px;
		font-size: large;
		font-weight: 900;
		cursor: default;
	}
	.card {
		background: rgb(105, 100, 90);
		border-radius: 7px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	img {
		max-width: 50%;
		max-height: 50%;
	}
</style>
