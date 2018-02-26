DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
  item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
  poduct_name VARCHAR(100),
  department_name VARCHAR(30),
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (poduct_name, department_name, price, stock_quantity) 
values ('Nintendo Switch', 'Video Games', 299.97, 18);

INSERT INTO products (poduct_name, department_name, price, stock_quantity) 
values ('Legend of Zelda: Breath of the Wild', 'Video Games', 59.97, 25);

INSERT INTO products (poduct_name, department_name, price, stock_quantity) 
values ('Haiku from Zero', 'Music', 19.97, 5);

INSERT INTO products (poduct_name, department_name, price, stock_quantity) 
values ('Random Access Memories', 'Music', 29.97, 10);

INSERT INTO products (poduct_name, department_name, price, stock_quantity) 
values ('Let Go', 'Music', 25.89, 7);

INSERT INTO products (poduct_name, department_name, price, stock_quantity) 
values ('Black T-Shirt', 'Clothing', 5.99, 50);

INSERT INTO products (poduct_name, department_name, price, stock_quantity) 
values ('Red Makeup Bag', 'Beauty', 89.50, 13);

INSERT INTO products (poduct_name, department_name, price, stock_quantity) 
values ('Appreciation Ring', 'Jewelry', 59.99, 3);

INSERT INTO products (poduct_name, department_name, price, stock_quantity) 
values ('Chicken Feet', 'Food', 2.97, 120);

INSERT INTO products (poduct_name, department_name, price, stock_quantity) 
values ('Lechon', 'Food', 59.97, 8);