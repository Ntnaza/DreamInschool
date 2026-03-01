-- AlterTable
ALTER TABLE `keuangan` ADD COLUMN `bukuKasId` INTEGER NULL,
    ADD COLUMN `fotoBarang` LONGTEXT NULL,
    ADD COLUMN `fotoNota` LONGTEXT NULL,
    ADD COLUMN `kuantitas` DOUBLE NULL DEFAULT 1,
    ADD COLUMN `satuan` VARCHAR(191) NULL DEFAULT 'pcs';

-- CreateTable
CREATE TABLE `BukuKas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(191) NOT NULL,
    `deskripsi` TEXT NULL,
    `icon` VARCHAR(191) NULL DEFAULT 'Wallet',
    `color` VARCHAR(191) NULL DEFAULT 'blue',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `BukuKas_nama_key`(`nama`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Divisi` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(191) NOT NULL,
    `deskripsi` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Divisi_nama_key`(`nama`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Keuangan` ADD CONSTRAINT `Keuangan_bukuKasId_fkey` FOREIGN KEY (`bukuKasId`) REFERENCES `BukuKas`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
