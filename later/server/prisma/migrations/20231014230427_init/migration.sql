/*
  Warnings:

  - You are about to drop the column `sectionId` on the `User` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Assignment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `studentId` to the `Submission` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Assignment` ADD COLUMN `userId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Submission` ADD COLUMN `studentId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `sectionId`;

-- AddForeignKey
ALTER TABLE `Assignment` ADD CONSTRAINT `Assignment_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Submission` ADD CONSTRAINT `Submission_studentId_fkey` FOREIGN KEY (`studentId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
