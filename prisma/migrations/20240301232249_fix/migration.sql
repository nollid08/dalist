/*
  Warnings:

  - You are about to drop the `GroceryItems` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "GroceryItems";

-- CreateTable
CREATE TABLE "GroceryItem" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "timeEdited" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isBought" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "GroceryItem_pkey" PRIMARY KEY ("id")
);
