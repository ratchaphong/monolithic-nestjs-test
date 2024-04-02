-- CreateTable
CREATE TABLE `Occupations` (
    `id` VARCHAR(255) NOT NULL,
    `code` VARCHAR(255) NOT NULL,
    `nameTh` VARCHAR(255) NOT NULL,
    `nameEn` VARCHAR(255) NULL,
    `effectiveStartDate` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `effectiveEndDate` TIMESTAMP(6) NULL,
    `createdAt` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updatedAt` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),

    UNIQUE INDEX `Occupations_code_key`(`code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VerifyCards` (
    `id` VARCHAR(255) NOT NULL,
    `code` VARCHAR(255) NOT NULL,
    `nameTh` VARCHAR(255) NOT NULL,
    `nameEn` VARCHAR(255) NULL,
    `effectiveStartDate` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `effectiveEndDate` TIMESTAMP(6) NULL,
    `createdAt` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updatedAt` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `platforms` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `VerifyCards_code_key`(`code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VehicleRegistrationTypes` (
    `id` VARCHAR(255) NOT NULL,
    `code` VARCHAR(255) NOT NULL,
    `effectiveStartDate` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `effectiveEndDate` TIMESTAMP(6) NULL,
    `nameTh` VARCHAR(255) NOT NULL,
    `nameEn` VARCHAR(255) NULL,
    `createdAt` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updatedAt` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),

    UNIQUE INDEX `VehicleRegistrationTypes_code_key`(`code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
