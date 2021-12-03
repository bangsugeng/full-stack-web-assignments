-- create database --
CREATE DATABASE skilvulbookstore;

use skilvulbookstore;

-- create table penerbit
CREATE TABLE penerbit(
    id INT(10) AUTO_INCREMENT PRIMARY KEY NOT NULL,
    nama VARCHAR(50),
    kota VARCHAR(50)
);

-- insert data penerbit
INSERT INTO penerbit(nama, kota) VALUES
('AAA Publisher', 'Bandung'),
('BBB Publisher', 'Jakarta'),
('CCC Publisher', 'Jakarta'),
('DDD Publisher', 'Surabaya');

-- create table penulis
CREATE TABLE penulis(
    id int(10) AUTO_INCREMENT PRIMARY KEY NOT NULL,
    nama VARCHAR(50),
    kota VARCHAR(50)
);

-- insert data penulis
INSERT INTO penulis(nama, kota) VALUES
('Beatrix Potter', 'Bandung'),
('Wahyu Aditya', 'Jakarta'),
('Yurinda Dini', 'Surabaya');

-- create table buku
CREATE TABLE buku(
    id INT(10) AUTO_INCREMENT PRIMARY KEY NOT NULL,
    isbn VARCHAR(50),
    judul VARCHAR(50),
    penulis INT(10),
    penerbit INT(10),
    harga INT(10),
    stock INT(10),
    CONSTRAINT FK_buku_penulis FOREIGN KEY(penulis) REFERENCES penulis(id),
    CONSTRAINT FK_buku_penerbit FOREIGN KEY(penerbit) REFERENCES penerbit(id)
);

-- insert data buku
INSERT INTO buku VALUES
('', '0143132281', 'Cican Bisa ke Toilet Sendiri', 1, 1, 20000, 8),
('', '6024246941', 'Smart Big Book 365 Aktivitas Anak Cerdas', 3, 3, 99000, 100),
('', '0743298851', 'Cerita Anak Hebat', 2, 2, 50000, 9),
('', '0143130771', 'Aku Anak Pemberani, Percaya Diri, dan Mandiri', 1, 1, 30000, 7);

-- inner join
SELECT buku.id, isbn, judul, penulis, penerbit.nama AS penerbit, harga, stock FROM buku INNER JOIN penerbit ON buku.penerbit = penerbit.id;

-- left join
SELECT buku.id, isbn, judul, penulis, penerbit.nama AS penerbit, harga, stock FROM buku LEFT JOIN penerbit ON buku.penerbit = penerbit.id;

-- right join
SELECT buku.id, isbn, judul, penulis, penerbit.nama AS penerbit, harga, stock FROM buku RIGHT JOIN penerbit ON buku.penerbit = penerbit.id;

-- max
SELECT MAX(harga) FROM buku WHERE stock < 10;

-- min
SELECT MIN(harga) FROM buku;

-- count
SELECT COUNT(*) FROM buku WHERE harga < 100000;

