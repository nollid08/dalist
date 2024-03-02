import { addGroceryItem, deleteGroceryItem, getGroceryItems, toggleGroceryItem } from '$lib/server/grocery_items';
import type { GroceryItem } from '@prisma/client';
import type { Actions, PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
export const load = (async (event) => {
    if (!event.locals.user) redirect(302, "/login/");
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