/*
  Warnings:

  - You are about to drop the column `file` on the `Assignment` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Assignment` DROP FOREIGN KEY `Assignment_userId_fkey`;

-- AlterTable
ALTER TABLE `Assignment` DROP COLUMN `file`,
    ADD COLUMN `filePath` VARCHAR(191) NULL,
    MODIFY `description` VARCHAR(191) NULL,
    MODIFY `userId` INTEGER NULL;

-- AlterTable
ALTER TABLE `Course` MODIFY `description` VARCHAR(255) NULL;

-- AddForeignKey
ALTER TABLE `Assignment` ADD CONSTRAINT `Assignment_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
