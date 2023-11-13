-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(100) NOT NULL,
    `password` VARCHAR(100) NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `no_telp` VARCHAR(100) NOT NULL,
    `token` VARCHAR(100) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;