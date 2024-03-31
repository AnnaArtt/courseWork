/*
  Warnings:

  - You are about to drop the column `ageGroup` on the `CompetitionCategory` table. All the data in the column will be lost.
  - You are about to drop the column `category` on the `CompetitionCategory` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CompetitionCategory" DROP COLUMN "ageGroup",
DROP COLUMN "category",
ADD COLUMN     "idCategory" INTEGER;

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "category" TEXT NOT NULL,
    "ageGroup" "AGE" NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_id_key" ON "Category"("id");

-- AddForeignKey
ALTER TABLE "CompetitionCategory" ADD CONSTRAINT "CompetitionCategory_idCategory_fkey" FOREIGN KEY ("idCategory") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;
