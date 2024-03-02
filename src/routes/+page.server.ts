import { addGroceryItem, deleteGroceryItem, getGroceryItems, toggleGroceryItem } from '$lib/db';
import type { GroceryItem } from '@prisma/client';
import type { Actions, PageServerLoad } from './$types';
export const load = (async () => {
    const items: GroceryItem[] = await getGroceryItems();
    return { items };
}) satisfies PageServerLoad;

export const actions: Actions = {
    async addItem({ request }) {
        const formData = await request.formData();
        const name = formData.get('itemName') as string;
        await addGroceryItem(name);
    },
    async deleteItem({ request }) {
        const formData = await request.formData();
        const id = formData.get('id') as string;
        await deleteGroceryItem(id);
    },
    async toggleItem({ request }) {
        const formData = await request.formData();
        const id = formData.get('id') as string;
        await toggleGroceryItem(id);
    }
};