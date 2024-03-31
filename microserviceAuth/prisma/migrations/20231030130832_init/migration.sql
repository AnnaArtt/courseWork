/*
  Warnings:

  - The primary key for the `Judges` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `idJudges` on the `Judges` table. All the data in the column will be lost.
  - The primary key for the `Sportsman` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `idSportsman` on the `Sportsman` table. All the data in the column will be lost.
  - The primary key for the `Team` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `idTeam` on the `Team` table. All the data in the column will be lost.
  - You are about to drop the `Auth` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[id]` on the table `Sportsman` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Team` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `id` to the `Judges` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Sportsman` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `sex` on the `Sportsman` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `id` to the `Team` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ROLE" AS ENUM ('sportsman', 'judge', 'team');

-- CreateEnum
CREATE TYPE "SEX" AS ENUM ('male', 'female');

-- DropForeignKey
ALTER TABLE "Judges" DROP CONSTRAINT "Judges_idJudges_fkey";

-- DropForeignKey
ALTER TABLE "Sportsman" DROP CONSTRAINT "Sportsman_idSportsman_fkey";

-- DropForeignKey
ALTER TABLE "Sportsman" DROP CONSTRAINT "Sportsman_idTeam_fkey";

-- DropForeignKey
ALTER TABLE "Team" DROP CONSTRAINT "Team_idTeam_fkey";

-- DropIndex
DROP INDEX "Sportsman_idSportsman_key";

-- DropIndex
DROP INDEX "Team_idTeam_key";

-- AlterTable
ALTER TABLE "Judges" DROP CONSTRAINT "Judges_pkey",
DROP COLUMN "idJudges",
ADD COLUMN     "id" INTEGER NOT NULL,
ADD CONSTRAINT "Judges_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Sportsman" DROP CONSTRAINT "Sportsman_pkey",
DROP COLUMN "idSportsman",
ADD COLUMN     "id" INTEGER NOT NULL,
DROP COLUMN "sex",
ADD COLUMN     "sex" "SEX" NOT NULL,
ADD CONSTRAINT "Sportsman_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Team" DROP CONSTRAINT "Team_pkey",
DROP COLUMN "idTeam",
ADD COLUMN     "id" INTEGER NOT NULL,
ADD CONSTRAINT "Team_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "Auth";

-- DropEnum
DROP TYPE "Role";

-- DropEnum
DROP TYPE "Sex";

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "login" TEXT NOT NULL,
    "password" TEXT NOT NULL DEFAULT '1111',
    "role" "ROLE" NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_login_key" ON "User"("login");

-- CreateIndex
CREATE UNIQUE INDEX "Sportsman_id_key" ON "Sportsman"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Team_id_key" ON "Team"("id");

-- AddForeignKey
ALTER TABLE "Team" ADD CONSTRAINT "Team_id_fkey" FOREIGN KEY ("id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Judges" ADD CONSTRAINT "Judges_id_fkey" FOREIGN KEY ("id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sportsman" ADD CONSTRAINT "Sportsman_id_fkey" FOREIGN KEY ("id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sportsman" ADD CONSTRAINT "Sportsman_idTeam_fkey" FOREIGN KEY ("idTeam") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
