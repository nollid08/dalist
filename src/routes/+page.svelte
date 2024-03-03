<script lang="ts">
	import Grocery from './../lib/grocery-item.svelte';
	import type { PageData } from './$types';
	import { enhance } from '$app/forms';
	import type { GroceryItem } from '@prisma/client';

	export let data: PageData;
	let deleting: string[] = [];
	let creating = false;
	$: groceryItems = data.items.filter((item) => !deleting.includes(item.id));
</script>

<div class="m-9 mt-16 flex justify-center">
	<div class="prose w-full max-w-96 text-center">
		<h1>Grocery List</h1>
		<form
			action="?/addItem"
			method="post"
			use:enhance={() => {
				creating = true;
				console.log(deleting);
				return async ({ update }) => {
					await update();
					creating = false;
				};
			}}
		>
			<input
				class="input input-bordered input-primary w-full"
				type="text"
				name="itemName"
				disabled={creating}
				placeholder="Add an item..."
			/>
		</form>
		{#each groceryItems as item}
			<Grocery
				groceryItem={item}
				on:delete={() => {
					console.log('deleting');
					deleting = [...deleting, item.id];
					console.log(deleting);
				}}
			/>
		{/each}
		{#if creating}
			<p>Adding grocery ...</p>
		{/if}
	</div>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
