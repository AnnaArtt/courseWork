/*
  Warnings:

  - You are about to drop the column `idTeam` on the `Sportsman` table. All the data in the column will be lost.
  - Added the required column `idTeam1` to the `Sportsman` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Sportsman" DROP CONSTRAINT "Sportsman_idTeam_fkey";

-- AlterTable
ALTER TABLE "Sportsman" DROP COLUMN "idTeam",
ADD COLUMN     "idTeam1" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Sportsman" ADD CONSTRAINT "Sportsman_idTeam1_fkey" FOREIGN KEY ("idTeam1") REFERENCES "Team"("idTeam") ON DELETE RESTRICT ON UPDATE CASCADE;
