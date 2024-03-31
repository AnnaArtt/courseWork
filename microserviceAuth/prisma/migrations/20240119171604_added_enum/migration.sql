/*
  Warnings:

  - Added the required column `ageGroup` to the `CompetitionCategory` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "AGE" AS ENUM ('A', 'B', 'C', 'D', 'E');

-- AlterTable
ALTER TABLE "CompetitionCategory" ADD COLUMN     "ageGroup" "AGE" NOT NULL;
