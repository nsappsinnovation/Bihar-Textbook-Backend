-- CreateTable
CREATE TABLE `admins` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `full_name` VARCHAR(200) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(20) NULL,
    `password_hash` VARCHAR(255) NOT NULL,
    `avatar_url` VARCHAR(500) NULL,
    `is_active` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `admins_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `books` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `class_id` TINYINT NOT NULL,
    `subject` VARCHAR(100) NULL DEFAULT 'General',
    `board` VARCHAR(200) NULL DEFAULT 'Bihar Board',
    `cover_image_url` VARCHAR(500) NULL,
    `description` TEXT NULL,
    `status` ENUM('Published', 'Draft') NOT NULL DEFAULT 'Draft',
    `sort_order` INTEGER NULL DEFAULT 0,
    `created_by` INTEGER NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `book_chapters` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `book_id` INTEGER NOT NULL,
    `chapter_number` INTEGER NOT NULL,
    `title` VARCHAR(255) NULL,
    `hindi_title` VARCHAR(255) NULL,
    `pdf_url` VARCHAR(500) NULL,
    `sort_order` INTEGER NULL DEFAULT 0,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `notices` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(500) NOT NULL,
    `description` TEXT NULL,
    `type` ENUM('Notice', 'Tender') NOT NULL DEFAULT 'Notice',
    `category` VARCHAR(100) NULL,
    `is_pinned` BOOLEAN NULL DEFAULT false,
    `document_url` VARCHAR(500) NULL,
    `publish_date` DATE NULL,
    `created_by` INTEGER NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `managing_directors` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `from` DATE NOT NULL,
    `to` DATE NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `board_directors` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `designation` VARCHAR(255) NOT NULL,
    `since` VARCHAR(50) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `employees` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `designation` VARCHAR(255) NOT NULL,
    `type` ENUM('Regular', 'Contract', 'Outsource') NOT NULL DEFAULT 'Regular',
    `department` VARCHAR(200) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `managing_director_messages` (
    `id` INTEGER NOT NULL DEFAULT 1,
    `name` VARCHAR(255) NOT NULL,
    `designation` VARCHAR(255) NOT NULL,
    `photo_url` VARCHAR(500) NULL,
    `quote` TEXT NULL,
    `welcome_note` TEXT NOT NULL,
    `quality_note` TEXT NULL,
    `collaboration` TEXT NULL,
    `moving_forward` TEXT NULL,
    `updated_by` INTEGER NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sections` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `module` VARCHAR(50) NOT NULL,
    `title` VARCHAR(500) NOT NULL,
    `description` TEXT NULL,
    `content` TEXT NULL,
    `category` VARCHAR(100) NULL,
    `image_url` VARCHAR(500) NULL,
    `video_url` VARCHAR(500) NULL,
    `document_url` VARCHAR(500) NULL,
    `file_type` VARCHAR(20) NULL,
    `link` VARCHAR(500) NULL,
    `publish_date` DATE NULL,
    `sort_order` INTEGER NULL DEFAULT 0,
    `created_by` INTEGER NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `settings` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `setting_key` VARCHAR(100) NOT NULL,
    `setting_value` LONGTEXT NULL,
    `category` VARCHAR(50) NULL,
    `updated_by` INTEGER NULL,
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `settings_setting_key_key`(`setting_key`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

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

-- CreateTable
CREATE TABLE `activity_logs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `action` VARCHAR(500) NOT NULL,
    `type` VARCHAR(20) NOT NULL DEFAULT 'system',
    `is_read` BOOLEAN NOT NULL DEFAULT false,
    `admin_id` INTEGER NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `book_distributions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `year` INTEGER NOT NULL,
    `month` TINYINT NOT NULL,
    `distributed` INTEGER NOT NULL DEFAULT 0,
    `target` INTEGER NOT NULL DEFAULT 0,
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `book_distributions_year_month_key`(`year`, `month`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `books` ADD CONSTRAINT `books_created_by_fkey` FOREIGN KEY (`created_by`) REFERENCES `admins`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `book_chapters` ADD CONSTRAINT `book_chapters_book_id_fkey` FOREIGN KEY (`book_id`) REFERENCES `books`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `notices` ADD CONSTRAINT `notices_created_by_fkey` FOREIGN KEY (`created_by`) REFERENCES `admins`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `managing_director_messages` ADD CONSTRAINT `managing_director_messages_updated_by_fkey` FOREIGN KEY (`updated_by`) REFERENCES `admins`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sections` ADD CONSTRAINT `sections_created_by_fkey` FOREIGN KEY (`created_by`) REFERENCES `admins`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `settings` ADD CONSTRAINT `settings_updated_by_fkey` FOREIGN KEY (`updated_by`) REFERENCES `admins`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `activity_logs` ADD CONSTRAINT `activity_logs_admin_id_fkey` FOREIGN KEY (`admin_id`) REFERENCES `admins`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

