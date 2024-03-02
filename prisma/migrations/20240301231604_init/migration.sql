/*
  Warnings:

  - You are about to drop the `GroceryItem` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "GroceryItem";

-- CreateTable
CREATE TABLE "GroceryItems" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "timeEdited" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isBought" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "GroceryItems_pkey" PRIMARY KEY ("id")
);
