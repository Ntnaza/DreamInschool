-- AlterTable
ALTER TABLE `berita` ADD COLUMN `periodeId` INTEGER NULL;

-- AlterTable
ALTER TABLE `galeri` ADD COLUMN `periodeId` INTEGER NULL;

-- AlterTable
ALTER TABLE `keuangan` ADD COLUMN `periodeId` INTEGER NULL;

-- AlterTable
ALTER TABLE `leader` ADD COLUMN `periodeId` INTEGER NULL;

-- AlterTable
ALTER TABLE `pengurus` ADD COLUMN `periodeId` INTEGER NULL;

-- AlterTable
ALTER TABLE `programkerja` ADD COLUMN `periodeId` INTEGER NULL;

-- AlterTable
ALTER TABLE `surat` ADD COLUMN `periodeId` INTEGER NULL;

-- CreateTable
CREATE TABLE `Periode` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tahun` VARCHAR(191) NOT NULL,
    `namaKabinet` VARCHAR(191) NULL,
    `logoKabinet` LONGTEXT NULL,
    `isAktif` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Periode_tahun_key`(`tahun`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Pengurus` ADD CONSTRAINT `Pengurus_periodeId_fkey` FOREIGN KEY (`periodeId`) REFERENCES `Periode`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Berita` ADD CONSTRAINT `Berita_periodeId_fkey` FOREIGN KEY (`periodeId`) REFERENCES `Periode`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProgramKerja` ADD CONSTRAINT `ProgramKerja_periodeId_fkey` FOREIGN KEY (`periodeId`) REFERENCES `Periode`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Surat` ADD CONSTRAINT `Surat_periodeId_fkey` FOREIGN KEY (`periodeId`) REFERENCES `Periode`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Keuangan` ADD CONSTRAINT `Keuangan_periodeId_fkey` FOREIGN KEY (`periodeId`) REFERENCES `Periode`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Galeri` ADD CONSTRAINT `Galeri_periodeId_fkey` FOREIGN KEY (`periodeId`) REFERENCES `Periode`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Leader` ADD CONSTRAINT `Leader_periodeId_fkey` FOREIGN KEY (`periodeId`) REFERENCES `Periode`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
