/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Size" AS ENUM ('SMALL', 'MEDIUM', 'LARGE');

-- CreateEnum
CREATE TYPE "Grind" AS ENUM ('GROUND_FOR_FILTER', 'GROUND_FOR_FRENCH_PRESS', 'GROUND_FOR_STOVETOP', 'GROUND_FOR_ESPRESSO');

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Coffee" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "caracteristics" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "image" TEXT NOT NULL,
    "size" "Size" NOT NULL,
    "grind" "Grind" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Coffee_pkey" PRIMARY KEY ("id")
);
