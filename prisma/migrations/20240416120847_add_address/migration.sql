-- CreateTable
CREATE TABLE `Address` (
    `id` VARCHAR(191) NOT NULL,
    `street` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `state` VARCHAR(191) NOT NULL,
    `country` VARCHAR(191) NOT NULL,
    `postcode` VARCHAR(191) NOT NULL,
    `customer_profile_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Address_customer_profile_id_key`(`customer_profile_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Address` ADD CONSTRAINT `Address_customer_profile_id_fkey` FOREIGN KEY (`customer_profile_id`) REFERENCES `CustomerProfile`(`customer_profile_pk`) ON DELETE RESTRICT ON UPDATE CASCADE;
