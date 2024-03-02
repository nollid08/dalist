<script lang="ts">
	import { enhance } from '$app/forms';
	import type { GroceryItem } from '@prisma/client';

	export let groceryItem: GroceryItem;
	let completedForm: HTMLFormElement;
</script>

<div class="text-left flex justify-between p-3 bg-black bg-opacity-20 rounded-lg m-5 align-middle">
	<form
		action="?/toggleItem"
		method="post"
		class="h-min my-auto"
		bind:this={completedForm}
		use:enhance
	>
		<input type="hidden" name="id" value={groceryItem.id} />
		<input
			type="checkbox"
			checked={groceryItem.isBought}
			class="checkbox checkbox-accent checkbox-lg"
			on:click={() => completedForm.submit()}
		/>
	</form>
	<p class="text-slate-100 opacity-1">{groceryItem.name}</p>
	<form action="?/deleteItem" class="my-auto" name="id" method="post" use:enhance>
		<input type="hidden" name="id" value={groceryItem.id} />
		<button class="btn btn-circle btn-outline">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M6 18L18 6M6 6l12 12"
				/></svg
			>
		</button>
	</form>
</div>
