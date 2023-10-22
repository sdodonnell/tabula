/*
  Warnings:

  - Made the column `courseId` on table `Section` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `Section` DROP FOREIGN KEY `Section_courseId_fkey`;

-- AlterTable
ALTER TABLE `Section` MODIFY `courseId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Section` ADD CONSTRAINT `Section_courseId_fkey` FOREIGN KEY (`courseId`) REFERENCES `Course`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
