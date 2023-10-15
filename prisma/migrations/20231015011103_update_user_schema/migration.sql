/*
  Warnings:

  - You are about to drop the column `pronouns` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Section` DROP FOREIGN KEY `Section_teacherId_fkey`;

-- AlterTable
ALTER TABLE `Section` MODIFY `teacherId` INTEGER NULL;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `pronouns`,
    ADD COLUMN `gender` VARCHAR(255) NULL;

-- AddForeignKey
ALTER TABLE `Section` ADD CONSTRAINT `Section_teacherId_fkey` FOREIGN KEY (`teacherId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
