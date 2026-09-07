-- CreateTable
CREATE TABLE `directory` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` VARCHAR(50) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `designation` VARCHAR(255) NULL,
    `department` VARCHAR(200) NULL,
    `tag` VARCHAR(50) NULL,
    `email` VARCHAR(255) NULL,
    `phone` VARCHAR(50) NULL,
    `photo_url` VARCHAR(500) NULL,
    `tenure_from` VARCHAR(50) NULL,
    `tenure_to` VARCHAR(50) NULL,
    `status` VARCHAR(20) NULL DEFAULT 'Active',
    `sort_order` INTEGER NULL DEFAULT 0,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `directory_type_idx`(`type`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
