/*
  Warnings:

  - Added the required column `role` to the `Auth` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idTeam` to the `Sportsman` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Auth" ADD COLUMN     "role" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Sportsman" ADD COLUMN     "idTeam" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Sportsman" ADD CONSTRAINT "Sportsman_idTeam_fkey" FOREIGN KEY ("idTeam") REFERENCES "Team"("idTeam") ON DELETE RESTRICT ON UPDATE CASCADE;
