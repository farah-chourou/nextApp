/*
  Warnings:

  - You are about to drop the column `img` on the `Product` table. All the data in the column will be lost.
  - You are about to alter the column `status` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `String` to `Boolean`.

*/
-- CreateTable
CREATE TABLE "Image" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL,
    "productId" INTEGER NOT NULL,
    CONSTRAINT "Image_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "ratings" REAL,
    "description" TEXT,
    "category" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL,
    "price" REAL NOT NULL
);
INSERT INTO "new_Product" ("category", "description", "id", "name", "price", "ratings", "status") SELECT "category", "description", "id", "name", "price", "ratings", "status" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
