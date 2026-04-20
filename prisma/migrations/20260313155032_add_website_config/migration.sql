-- CreateTable
CREATE TABLE `WebsiteConfig` (
    `id` INTEGER NOT NULL DEFAULT 1,
    `namaOrganisasi` VARCHAR(191) NOT NULL DEFAULT 'OSIS MPK',
    `deskripsi` TEXT NULL,
    `logoUrl` LONGTEXT NULL,
    `faviconUrl` LONGTEXT NULL,
    `instagram` VARCHAR(191) NULL DEFAULT 'https://instagram.com/',
    `youtube` VARCHAR(191) NULL DEFAULT 'https://youtube.com/',
    `tiktok` VARCHAR(191) NULL DEFAULT 'https://tiktok.com/',
    `email` VARCHAR(191) NULL DEFAULT 'admin@school.sch.id',
    `telepon` VARCHAR(191) NULL DEFAULT '0263123456',
    `alamat` TEXT NULL,
    `mapUrl` TEXT NULL,
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
