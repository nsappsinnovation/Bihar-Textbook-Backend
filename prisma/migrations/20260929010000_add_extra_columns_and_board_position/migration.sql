-- AlterTable
ALTER TABLE `activity_logs` ADD COLUMN `extra_number` DOUBLE NULL,
    ADD COLUMN `extra_text` TEXT NULL;

-- AlterTable
ALTER TABLE `admins` ADD COLUMN `extra_number` DOUBLE NULL,
    ADD COLUMN `extra_text` TEXT NULL;

-- AlterTable
ALTER TABLE `board_directors` ADD COLUMN `extra_number` DOUBLE NULL,
    ADD COLUMN `extra_text` TEXT NULL;

-- AlterTable
ALTER TABLE `book_chapters` ADD COLUMN `extra_number` DOUBLE NULL,
    ADD COLUMN `extra_text` TEXT NULL;

-- AlterTable
ALTER TABLE `book_distributions` ADD COLUMN `extra_number` DOUBLE NULL,
    ADD COLUMN `extra_text` TEXT NULL;

-- AlterTable
ALTER TABLE `books` ADD COLUMN `extra_number` DOUBLE NULL,
    ADD COLUMN `extra_text` TEXT NULL;

-- AlterTable
ALTER TABLE `directory` ADD COLUMN `board_position` VARCHAR(255) NULL,
    ADD COLUMN `extra_number` DOUBLE NULL,
    ADD COLUMN `extra_text` TEXT NULL;

-- AlterTable
ALTER TABLE `employees` ADD COLUMN `extra_number` DOUBLE NULL,
    ADD COLUMN `extra_text` TEXT NULL;

-- AlterTable
ALTER TABLE `managing_director_messages` ADD COLUMN `extra_number` DOUBLE NULL,
    ADD COLUMN `extra_text` TEXT NULL;

-- AlterTable
ALTER TABLE `managing_directors` ADD COLUMN `extra_number` DOUBLE NULL,
    ADD COLUMN `extra_text` TEXT NULL;

-- AlterTable
ALTER TABLE `notices` ADD COLUMN `extra_number` DOUBLE NULL,
    ADD COLUMN `extra_text` TEXT NULL;

-- AlterTable
ALTER TABLE `sections` ADD COLUMN `extra_number` DOUBLE NULL,
    ADD COLUMN `extra_text` TEXT NULL;

-- AlterTable
ALTER TABLE `settings` ADD COLUMN `extra_number` DOUBLE NULL,
    ADD COLUMN `extra_text` TEXT NULL;

