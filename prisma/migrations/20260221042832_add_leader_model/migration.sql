/*
  Warnings:

  - You are about to drop the column `jumlah` on the `inventaris` table. All the data in the column will be lost.
  - You are about to drop the column `keterangan` on the `inventaris` table. All the data in the column will be lost.
  - You are about to drop the column `kodeBarang` on the `inventaris` table. All the data in the column will be lost.
  - You are about to drop the column `lastUpdate` on the `inventaris` table. All the data in the column will be lost.
  - You are about to drop the column `lokasi` on the `inventaris` table. All the data in the column will be lost.
  - You are about to drop the column `namaBarang` on the `inventaris` table. All the data in the column will be lost.
  - You are about to alter the column `kondisi` on the `inventaris` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(3))` to `VarChar(191)`.
  - You are about to drop the column `createdAt` on the `leader` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[kode]` on the table `Inventaris` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `kategori` to the `Inventaris` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kode` to the `Inventaris` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nama` to the `Inventaris` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Inventaris` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Inventaris_kodeBarang_key` ON `inventaris`;

-- AlterTable
ALTER TABLE `inventaris` DROP COLUMN `jumlah`,
    DROP COLUMN `keterangan`,
    DROP COLUMN `kodeBarang`,
    DROP COLUMN `lastUpdate`,
    DROP COLUMN `lokasi`,
    DROP COLUMN `namaBarang`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `fotoUrl` LONGTEXT NULL,
    ADD COLUMN `harga` DOUBLE NOT NULL DEFAULT 0,
    ADD COLUMN `kategori` VARCHAR(191) NOT NULL,
    ADD COLUMN `kode` VARCHAR(191) NOT NULL,
    ADD COLUMN `nama` VARCHAR(191) NOT NULL,
    ADD COLUMN `peminjam` VARCHAR(191) NULL,
    ADD COLUMN `serialNum` VARCHAR(191) NULL,
    ADD COLUMN `status` ENUM('AVAILABLE', 'BORROWED', 'MAINTENANCE', 'LOST') NOT NULL DEFAULT 'AVAILABLE',
    ADD COLUMN `tglPinjam` DATETIME(3) NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    MODIFY `kondisi` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `keuangan` ADD COLUMN `prokerId` INTEGER NULL;

-- AlterTable
ALTER TABLE `leader` DROP COLUMN `createdAt`,
    MODIFY `image` LONGTEXT NOT NULL,
    MODIFY `vision` TEXT NOT NULL,
    MODIFY `tags` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `pengurus` ADD COLUMN `domisili` VARCHAR(191) NULL,
    ADD COLUMN `email` VARCHAR(191) NULL,
    ADD COLUMN `idCardDesign` LONGTEXT NULL,
    ADD COLUMN `instagram` VARCHAR(191) NULL,
    ADD COLUMN `misi` TEXT NULL,
    ADD COLUMN `motto` VARCHAR(191) NULL,
    ADD COLUMN `tglLahir` DATETIME(3) NULL,
    ADD COLUMN `tiktok` VARCHAR(191) NULL,
    ADD COLUMN `transportasi` VARCHAR(191) NULL,
    ADD COLUMN `visi` TEXT NULL,
    MODIFY `fotoUrl` LONGTEXT NULL;

-- AlterTable
ALTER TABLE `programkerja` ADD COLUMN `anggaran` DOUBLE NOT NULL DEFAULT 0,
    ADD COLUMN `anggaranTerpakai` DOUBLE NOT NULL DEFAULT 0,
    ADD COLUMN `prioritas` VARCHAR(191) NOT NULL DEFAULT 'Medium',
    ADD COLUMN `progress` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `startDate` DATETIME(3) NULL,
    MODIFY `image` LONGTEXT NULL;

-- CreateTable
CREATE TABLE `RiwayatAset` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `peminjam` VARCHAR(191) NOT NULL,
    `tglKeluar` DATETIME(3) NOT NULL,
    `tglKembali` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `kondisiKembali` VARCHAR(191) NOT NULL,
    `inventarisId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AppConfig` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idCardBackImage` LONGTEXT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Galeri` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `judul` VARCHAR(191) NOT NULL,
    `kategori` VARCHAR(191) NOT NULL,
    `tanggal` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `images` LONGTEXT NOT NULL,
    `deskripsi` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Inventaris_kode_key` ON `Inventaris`(`kode`);

-- AddForeignKey
ALTER TABLE `Keuangan` ADD CONSTRAINT `Keuangan_prokerId_fkey` FOREIGN KEY (`prokerId`) REFERENCES `ProgramKerja`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RiwayatAset` ADD CONSTRAINT `RiwayatAset_inventarisId_fkey` FOREIGN KEY (`inventarisId`) REFERENCES `Inventaris`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
