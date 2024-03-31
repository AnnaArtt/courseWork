-- DropForeignKey
ALTER TABLE "Sportsman" DROP CONSTRAINT "Sportsman_idTeam_fkey";

-- AlterTable
ALTER TABLE "Sportsman" ALTER COLUMN "idTeam" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Sportsman" ADD CONSTRAINT "Sportsman_idTeam_fkey" FOREIGN KEY ("idTeam") REFERENCES "Team"("id") ON DELETE SET NULL ON UPDATE CASCADE;
