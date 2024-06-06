/*
  Warnings:

  - You are about to drop the column `userId` on the `Word` table. All the data in the column will be lost.
  - Added the required column `listId` to the `Word` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Word" DROP CONSTRAINT "Word_userId_fkey";

-- AlterTable
ALTER TABLE "Word" DROP COLUMN "userId",
ADD COLUMN     "listId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "List" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "List_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Word" ADD CONSTRAINT "Word_listId_fkey" FOREIGN KEY ("listId") REFERENCES "List"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "List" ADD CONSTRAINT "List_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
