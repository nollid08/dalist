-- CreateTable
CREATE TABLE "GroceryItem" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "timeEdited" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isBought" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "GroceryItem_pkey" PRIMARY KEY ("id")
);
