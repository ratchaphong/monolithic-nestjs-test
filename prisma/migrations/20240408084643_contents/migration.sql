-- CreateTable
CREATE TABLE `ConsentContents` (
    `id` VARCHAR(255) NOT NULL,
    `header` VARCHAR(255) NOT NULL,
    `content` VARCHAR(255) NOT NULL,
    `acceptMsg` VARCHAR(255) NOT NULL,
    `isRequireAccepted` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updatedAt` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `deletedAt` TIMESTAMP(6) NULL,
    `consentId` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ConsentContents` ADD CONSTRAINT `ConsentContents_consentId_fkey` FOREIGN KEY (`consentId`) REFERENCES `Consents`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
