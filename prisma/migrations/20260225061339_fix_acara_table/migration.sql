/*
  Warnings:

  - Added the required column `acaraId` to the `Absensi` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `absensi` ADD COLUMN `acaraId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Acara` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(191) NOT NULL,
    `deskripsi` TEXT NULL,
    `tanggal` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `lokasi` VARCHAR(191) NULL DEFAULT 'Sekolah',
    `status` ENUM('UPCOMING', 'ONGOING', 'COMPLETED', 'CANCELLED') NOT NULL DEFAULT 'UPCOMING',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `Visitor_ip_path_createdAt_idx` ON `Visitor`(`ip`, `path`, `createdAt`);

-- AddForeignKey
ALTER TABLE `Absensi` ADD CONSTRAINT `Absensi_acaraId_fkey` FOREIGN KEY (`acaraId`) REFERENCES `Acara`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
