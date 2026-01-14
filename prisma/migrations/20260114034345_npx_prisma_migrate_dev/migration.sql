-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` ENUM('ADMIN', 'PENGURUS') NOT NULL DEFAULT 'PENGURUS',
    `pengurusId` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `User_username_key`(`username`),
    UNIQUE INDEX `User_pengurusId_key`(`pengurusId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pengurus` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(191) NOT NULL,
    `nis` VARCHAR(191) NOT NULL,
    `kelas` VARCHAR(191) NOT NULL,
    `jabatan` VARCHAR(191) NOT NULL,
    `divisi` VARCHAR(191) NOT NULL,
    `fotoUrl` VARCHAR(191) NULL,
    `hp` VARCHAR(191) NULL,
    `status` ENUM('AKTIF', 'NONAKTIF', 'ALUMNI') NOT NULL DEFAULT 'AKTIF',
    `isAdvisor` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Pengurus_nis_key`(`nis`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Aspirasi` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pengirim` VARCHAR(191) NOT NULL DEFAULT 'Anonim',
    `kelas` VARCHAR(191) NULL,
    `isi` TEXT NOT NULL,
    `kategori` VARCHAR(191) NOT NULL,
    `status` ENUM('PENDING', 'DITERIMA', 'DITOLAK', 'SELESAI') NOT NULL DEFAULT 'PENDING',
    `balasan` TEXT NULL,
    `balasanAt` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Berita` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `judul` VARCHAR(191) NOT NULL,
    `konten` LONGTEXT NOT NULL,
    `gambar` LONGTEXT NULL,
    `kategori` VARCHAR(191) NOT NULL,
    `penulisId` INTEGER NOT NULL,
    `views` INTEGER NOT NULL DEFAULT 0,
    `status` VARCHAR(191) NOT NULL DEFAULT 'PUBLISHED',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProgramKerja` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(191) NOT NULL,
    `deskripsi` TEXT NULL,
    `divisi` VARCHAR(191) NOT NULL,
    `status` ENUM('TODO', 'IN_PROGRESS', 'DONE', 'BATAL') NOT NULL DEFAULT 'TODO',
    `deadline` DATETIME(3) NULL,
    `image` TEXT NULL,
    `isFeatured` BOOLEAN NOT NULL DEFAULT false,
    `lokasi` VARCHAR(191) NULL DEFAULT 'Lingkungan Sekolah',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `pjId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Absensi` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tanggal` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `kegiatan` VARCHAR(191) NOT NULL,
    `status` ENUM('HADIR', 'IZIN', 'SAKIT', 'ALPA') NOT NULL DEFAULT 'HADIR',
    `keterangan` VARCHAR(191) NULL,
    `pengurusId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Surat` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nomorSurat` VARCHAR(191) NOT NULL,
    `jenis` VARCHAR(191) NOT NULL,
    `perihal` VARCHAR(191) NOT NULL,
    `tujuan` VARCHAR(191) NOT NULL,
    `fileUrl` VARCHAR(191) NULL,
    `tanggal` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Surat_nomorSurat_key`(`nomorSurat`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Keuangan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `judul` VARCHAR(191) NOT NULL,
    `tipe` ENUM('PEMASUKAN', 'PENGELUARAN') NOT NULL,
    `nominal` DOUBLE NOT NULL,
    `kategori` VARCHAR(191) NOT NULL,
    `tanggal` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `buktiUrl` VARCHAR(191) NULL,
    `keterangan` TEXT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Inventaris` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `namaBarang` VARCHAR(191) NOT NULL,
    `kodeBarang` VARCHAR(191) NOT NULL,
    `jumlah` INTEGER NOT NULL,
    `kondisi` ENUM('BAIK', 'RUSAK_RINGAN', 'RUSAK_BERAT', 'HILANG') NOT NULL DEFAULT 'BAIK',
    `lokasi` VARCHAR(191) NOT NULL,
    `keterangan` VARCHAR(191) NULL,
    `lastUpdate` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Inventaris_kodeBarang_key`(`kodeBarang`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Leader` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `role` VARCHAR(191) NOT NULL,
    `image` TEXT NOT NULL,
    `vision` VARCHAR(191) NOT NULL,
    `mission` TEXT NOT NULL,
    `tags` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_pengurusId_fkey` FOREIGN KEY (`pengurusId`) REFERENCES `Pengurus`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Berita` ADD CONSTRAINT `Berita_penulisId_fkey` FOREIGN KEY (`penulisId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProgramKerja` ADD CONSTRAINT `ProgramKerja_pjId_fkey` FOREIGN KEY (`pjId`) REFERENCES `Pengurus`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Absensi` ADD CONSTRAINT `Absensi_pengurusId_fkey` FOREIGN KEY (`pengurusId`) REFERENCES `Pengurus`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
