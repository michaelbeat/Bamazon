DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE  products 
(
	id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(200) NULL,
    department_name VARCHAR(100) NULL,
    price DECIMAL(10, 2) NULL,
    stock_quantity INT NULL,
    PRIMARY KEY (id)
);

SELECT * FROM products;

INSERT INTO products ( product_name, department_name, price, stock_quantity ) VALUES
	("Doritos", "saltySnacks", 3.25, 250), 
    ("Cheez Its", "saltySnacks", 3.25, 250), 
    ("Goldfish", "saltySnacks", 3.25, 250), 
    ("PopCorn", "saltySnacks", 3.25, 250), 
    ("Jelly Beans", "sweetSnacks", 2.50, 150),
    ("Laffy Taffy", "sweetSnacks", 2.50, 125),
    ("Milky Way", "sweetSnacks", 1.75, 135),
    ("Snickers", "sweetSnacks", 1.75, 135);



SELECT product_name, price FROM products WHERE department_name="saltySnacks"; 

SELECT product_name, price FROM products WHERE department_name="sweetSnacks"; 
