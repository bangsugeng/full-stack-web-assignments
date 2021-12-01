-- Show Database --
SHOW DATABASES;

-- Create Database --
CREATE DATABASE bookstore;

-- Use Database --
USE bookstore;

-- Show Table --
SHOW TABLES;

-- Create Table --
CREATE TABLE books (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,  
    author1 VARCHAR(100) NOT NULL,  
    author2 VARCHAR(100), 
    author3 VARCHAR(100),
    title VARCHAR(100),
    description VARCHAR(256),
    place_sell CHAR(3),
    stock INT DEFAULT 0,
    creation_date DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL
);

-- Update Table --
SELECT * FROM books;
ALTER TABLE books
	ADD price INT DEFAULT 0,
	ADD `status` ENUM('available', 'out of stock', 'limited'),
	DROP place_sell;

-- Insert Table --
SELECT * FROM books;
INSERT INTO books(author1, author2, author3, title, description, stock, creation_date, price, status)
    values  ('Sugeng','Romadhoni','Masdoni','KETAWA AJA','Buku ini berisi kumpulan jokes masa kini',10,'2020/01/05 01:02:03',45000,'limited'),
            ('Zul','Fi','Kar','1001 Project FrontEnd','Buku ini berisi 1001 project frontend',20,'2019/10/16 13:26:12',77000,'available'),
            ('Dwi','Yanto','Subastian','Mengodinx Itu Ezpz','Buku ini berisi tutorial mengoding',20,'20109/03/14 10:26:31',66000,'limited');

-- Select Table --
SELECT * FROM books;

-- Alias --
SELECT id AS ID, author1 AS A1, author2 AS A2, author3 AS A3
FROM books;

-- Select Where --
SELECT * FROM books WHERE id = 1;

-- Operator AND --
SELECT * FROM books WHERE id = 1 AND author1 = 'Sugeng' ;

-- Operator OR --
SELECT * FROM books WHERE id = 1 OR author2 = 'Romadhoni';

-- Operator NOT --
SELECT * FROM books WHERE NOT id = 1; 

--- Order By ---
SELECT * FROM books ORDER BY id ASC;

--- Limit ---
SELECT * FROM books
    LIMIT 2;

--- Update ---
UPDATE books
    SET author1 = 'Nita', price = 47000
    WHERE id = 1;

--- Delete Row ---
DELETE FROM books
    WHERE id = 2;