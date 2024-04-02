/*
  Warnings:

  - You are about to alter the column `platforms` on the `verifycards` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Json`.

*/
-- AlterTable
ALTER TABLE `verifycards` MODIFY `platforms` JSON NOT NULL;
