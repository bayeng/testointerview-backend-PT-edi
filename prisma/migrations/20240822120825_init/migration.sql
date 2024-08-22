-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `isAdmin` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `accessToken` (
    `id` VARCHAR(191) NOT NULL,
    `token` TEXT NOT NULL,
    `expiredAt` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `userId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PendidikanTerakhir` (
    `id` VARCHAR(191) NOT NULL,
    `jenjangPendidikan` VARCHAR(100) NOT NULL,
    `namaInstitusi` VARCHAR(100) NOT NULL,
    `jurusan` VARCHAR(50) NOT NULL,
    `lulus` VARCHAR(50) NOT NULL,
    `ipk` DOUBLE NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RiwayatPelatihan` (
    `id` VARCHAR(191) NOT NULL,
    `namaPelatihan` VARCHAR(255) NOT NULL,
    `isSertifikat` BOOLEAN NOT NULL,
    `tahun` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RiwayatPekerjaan` (
    `id` VARCHAR(191) NOT NULL,
    `namaPerusahaan` VARCHAR(255) NOT NULL,
    `posisiTerakhir` VARCHAR(255) NOT NULL,
    `pendapatanTerakhir` DOUBLE NOT NULL,
    `tahun` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Biodata` (
    `id` VARCHAR(191) NOT NULL,
    `nama` VARCHAR(100) NOT NULL,
    `posisiLamaran` VARCHAR(100) NOT NULL,
    `noKtp` VARCHAR(191) NOT NULL,
    `lahir` VARCHAR(100) NOT NULL,
    `isCewek` BOOLEAN NOT NULL,
    `agama` VARCHAR(50) NOT NULL,
    `golDarah` VARCHAR(10) NOT NULL,
    `statusPerkawinan` VARCHAR(50) NOT NULL,
    `alamatKtp` VARCHAR(255) NOT NULL,
    `alamat` VARCHAR(255) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `noHp` VARCHAR(20) NOT NULL,
    `orangDarurat` VARCHAR(100) NOT NULL,
    `skill` TEXT NOT NULL,
    `isBersediaLuarKota` BOOLEAN NOT NULL,
    `harapanPenghasilan` DOUBLE NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `pendidikanTerakhirId` VARCHAR(191) NULL,
    `riwayatPelatihanId` VARCHAR(191) NULL,
    `riwayatPekerjaanId` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Biodata_noKtp_key`(`noKtp`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `accessToken` ADD CONSTRAINT `accessToken_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Biodata` ADD CONSTRAINT `Biodata_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Biodata` ADD CONSTRAINT `Biodata_pendidikanTerakhirId_fkey` FOREIGN KEY (`pendidikanTerakhirId`) REFERENCES `PendidikanTerakhir`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Biodata` ADD CONSTRAINT `Biodata_riwayatPelatihanId_fkey` FOREIGN KEY (`riwayatPelatihanId`) REFERENCES `RiwayatPelatihan`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Biodata` ADD CONSTRAINT `Biodata_riwayatPekerjaanId_fkey` FOREIGN KEY (`riwayatPekerjaanId`) REFERENCES `RiwayatPekerjaan`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
