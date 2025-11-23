-- AddForeignKey
ALTER TABLE `Enrollment` ADD CONSTRAINT `Enrollment_scheduleId_fkey` FOREIGN KEY (`scheduleId`) REFERENCES `Schedule`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
