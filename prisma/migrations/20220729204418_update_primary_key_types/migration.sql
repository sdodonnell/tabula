/*
  Warnings:

  - The primary key for the `Assignment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `AssignmentEntry` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Course` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `CourseDuration` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `CourseEnrollment` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Assignment" DROP CONSTRAINT "Assignment_courseId_fkey";

-- DropForeignKey
ALTER TABLE "AssignmentEntry" DROP CONSTRAINT "AssignmentEntry_assignmentId_fkey";

-- DropForeignKey
ALTER TABLE "CourseDuration" DROP CONSTRAINT "CourseDuration_courseId_fkey";

-- DropForeignKey
ALTER TABLE "CourseEnrollment" DROP CONSTRAINT "CourseEnrollment_courseId_fkey";

-- AlterTable
ALTER TABLE "Assignment" DROP CONSTRAINT "Assignment_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "courseId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Assignment_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "AssignmentEntry" DROP CONSTRAINT "AssignmentEntry_pkey",
ALTER COLUMN "assignmentId" SET DATA TYPE TEXT,
ADD CONSTRAINT "AssignmentEntry_pkey" PRIMARY KEY ("studentId", "assignmentId");

-- AlterTable
ALTER TABLE "Course" DROP CONSTRAINT "Course_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Course_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "CourseDuration" DROP CONSTRAINT "CourseDuration_pkey",
ALTER COLUMN "courseId" SET DATA TYPE TEXT,
ADD CONSTRAINT "CourseDuration_pkey" PRIMARY KEY ("courseId", "durationId");

-- AlterTable
ALTER TABLE "CourseEnrollment" DROP CONSTRAINT "CourseEnrollment_pkey",
ALTER COLUMN "courseId" SET DATA TYPE TEXT,
ADD CONSTRAINT "CourseEnrollment_pkey" PRIMARY KEY ("userId", "courseId");

-- AlterTable
CREATE SEQUENCE "duration_id_seq";
ALTER TABLE "Duration" ALTER COLUMN "id" SET DEFAULT nextval('duration_id_seq');
ALTER SEQUENCE "duration_id_seq" OWNED BY "Duration"."id";

-- AlterTable
CREATE SEQUENCE "user_id_seq";
ALTER TABLE "User" ALTER COLUMN "id" SET DEFAULT nextval('user_id_seq');
ALTER SEQUENCE "user_id_seq" OWNED BY "User"."id";

-- AddForeignKey
ALTER TABLE "CourseEnrollment" ADD CONSTRAINT "CourseEnrollment_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assignment" ADD CONSTRAINT "Assignment_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssignmentEntry" ADD CONSTRAINT "AssignmentEntry_assignmentId_fkey" FOREIGN KEY ("assignmentId") REFERENCES "Assignment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseDuration" ADD CONSTRAINT "CourseDuration_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
