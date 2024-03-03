import { type GroceryItem } from "@prisma/client";
import { dbClient } from "$lib/server/db";


export async function getGroceryItems(): Promise<GroceryItem[]> {
    try {
        const groceryItems: GroceryItem[] = await dbClient.groceryItem.findMany({
            orderBy: [{
                isBought: "asc",
            }, {
                timeEdited: "desc",

            },]
        });
        return groceryItems;
    } catch (e) {
        console.error(e);
        return [];
    }
}
export async function addGroceryItem(itemName: string) {
    await dbClient.groceryItem.create({
        data: {
            name: itemName
        }
    });

}

export async function deleteGroceryItem(id: string) {
    await dbClient.groceryItem.delete({ where: { id: id } });
}

export async function toggleGroceryItem(id: string) {
    //get current item
    const item = await dbClient.groceryItem.findUnique({
        where: { id: id }
    });
    if (item) {
        await dbClient.groceryItem.update({
            where: { id: id },
            data: { isBought: !item.isBought, timeEdited: new Date() }
        });
    } else {
        throw Error("Item not found");
    }
}
