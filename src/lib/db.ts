import { PrismaClient, type GroceryItem } from "@prisma/client";

const dbClient = new PrismaClient();

export async function getGroceryItems(): Promise<GroceryItem[]> {
    const groceryItems: GroceryItem[] = await dbClient.groceryItem.findMany();
    return groceryItems;
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
            data: { isBought: !item.isBought }
        });
    } else {
        throw Error("Item not found");
    }
}
