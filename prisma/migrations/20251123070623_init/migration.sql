/*
  Warnings:

  - You are about to drop the `absence` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `absencedetail` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `absence` DROP FOREIGN KEY `Absence_scheduleId_fkey`;

-- DropForeignKey
ALTER TABLE `absencedetail` DROP FOREIGN KEY `AbsenceDetail_absenceId_fkey`;

-- DropTable
DROP TABLE `absence`;

-- DropTable
DROP TABLE `absencedetail`;
