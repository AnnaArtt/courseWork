/*
  Warnings:

  - Changed the type of `role` on the `Auth` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `name` on the `Sportsman` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('sportsman', 'judge', 'team');

-- CreateEnum
CREATE TYPE "Sex" AS ENUM ('male', 'female');

-- AlterTable
ALTER TABLE "Auth" DROP COLUMN "role",
ADD COLUMN     "role" "Role" NOT NULL;

-- AlterTable
ALTER TABLE "Sportsman" DROP COLUMN "name",
ADD COLUMN     "name" "Sex" NOT NULL;
