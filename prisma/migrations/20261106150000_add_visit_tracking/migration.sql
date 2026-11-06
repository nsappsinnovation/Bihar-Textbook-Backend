-- CreateTable
CREATE TABLE `page_visits` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `section` VARCHAR(20) NOT NULL,
    `item_key` VARCHAR(255) NOT NULL,
    `device` VARCHAR(20) NOT NULL,
    `visitor_id` VARCHAR(100) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `page_visits_section_item_key_idx`(`section`, `item_key`),
    INDEX `page_visits_created_at_idx`(`created_at`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
