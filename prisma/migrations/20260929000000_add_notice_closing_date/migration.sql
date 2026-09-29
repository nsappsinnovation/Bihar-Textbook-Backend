-- AlterTable
ALTER TABLE `notices` ADD COLUMN `closing_date` DATE NULL;

-- CreateIndex
CREATE INDEX `notices_type_closing_date_idx` ON `notices`(`type`, `closing_date`);
