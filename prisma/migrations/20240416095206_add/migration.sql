-- CreateTable
CREATE TABLE `ActionHistories` (
    `id` VARCHAR(255) NOT NULL,
    `modelName` VARCHAR(255) NOT NULL,
    `modelId` VARCHAR(255) NOT NULL,
    `actionType` VARCHAR(255) NOT NULL,
    `remark` VARCHAR(255) NULL,
    `actionUserId` VARCHAR(255) NULL,
    `actionBy` VARCHAR(255) NOT NULL,
    `createdAt` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updatedAt` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),

    INDEX `ActionHistories_modelName_modelId_idx`(`modelName`, `modelId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
