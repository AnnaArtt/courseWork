/*
  Warnings:

  - Changed the type of `timeInvoice` on the `CompetitionCategoryResult` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "CompetitionCategoryResult" DROP COLUMN "timeInvoice",
ADD COLUMN     "timeInvoice" DOUBLE PRECISION NOT NULL;
