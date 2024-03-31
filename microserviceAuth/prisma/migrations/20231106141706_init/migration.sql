/*
  Warnings:

  - Added the required column `category` to the `Sportsman` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year` to the `Sportsman` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Sportsman" ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "year" INTEGER NOT NULL;
