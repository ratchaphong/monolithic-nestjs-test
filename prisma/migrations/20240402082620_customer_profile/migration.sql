-- CreateTable
CREATE TABLE `CustomerProfile` (
    `customer_profile_pk` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(36) NULL,
    `firstName` VARCHAR(255) NULL,
    `lastName` VARCHAR(255) NULL,
    `email` VARCHAR(255) NULL,
    `username` VARCHAR(255) NULL,
    `password` VARCHAR(255) NULL,

    INDEX `customer_profile_user_id_idx_1`(`userId`),
    PRIMARY KEY (`customer_profile_pk`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
