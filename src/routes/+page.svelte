<script lang="ts">
	import GroceryItem from './../lib/grocery-item.svelte';
	import type { PageData } from './$types';
	import { enhance } from '$app/forms';

	export let data: PageData;
</script>

<div class="h-screen flex items-center justify-center w-lvw">
	<div class="prose w-96 text-center">
		<h1>Grocery List</h1>
		<form action="?/addItem" method="post" use:enhance>
			<input
				class="input input-bordered input-primary w-full"
				type="text"
				name="itemName"
				placeholder="Add an item..."
			/>
		</form>
		{#each data.items as item}
			<GroceryItem groceryItem={item} />
		{/each}
	</div>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
