-- CreateTable
CREATE TABLE `Consents` (
    `id` VARCHAR(255) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `sequence` SMALLINT NOT NULL,
    `category` VARCHAR(255) NOT NULL,
    `consentType` VARCHAR(255) NOT NULL,
    `state` VARCHAR(255) NOT NULL,
    `startAt` TIMESTAMP(6) NULL,
    `endAt` TIMESTAMP(6) NULL,
    `createdAt` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updatedAt` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `deletedAt` TIMESTAMP(6) NULL,
    `actionBy` VARCHAR(255) NOT NULL,
    `actionUserId` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
