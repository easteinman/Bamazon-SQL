# Bamazon 

## Overview

Bamazon is an online storefront utilizing MySQL and Node.js to allow users to purchase their favorite products.

![The storefront in the command line.](https://lh3.googleusercontent.com/KFPMo3U29EtqnGGxIQLhmzUEvwLiGFuhgdV__BrDbtb0YkcoiBejMPxMUEhIf58gPTco4_AKdpc "Storefront")

## Getting Started
These instructions will help you get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
Below is a list of a few things you will need to have installed for this application to work:

 - MySQL 
 - MySQL Workbench 
 - A few Node packages

### Installing
Follow the instructions and links below to get everything installed.

* [MySQL](https://dev.mysql.com/downloads/mysql/)
* [MySQL Workbench](https://dev.mysql.com/downloads/workbench/)
* After cloning this repo to your machine run `npm install` in your terminal to download the [inquirer](https://www.npmjs.com/package/inquirer), [mysql](https://www.npmjs.com/package/mysql) and [cli-table](https://www.npmjs.com/package/cli-table) node packages.

## Files

### Node.js
#### bamazonCustomer.js

 * Running `node bamazonCustomer.js` will generate a table of the   
    products available by utilizing the information in MySQL.
	- The user then inputs the `item_id` for the item they would like to purchase and the `quantity` desired.
	- If there is enough quantity in stock to meet the users demands the application will continue and display the total for the user's purchase. 
	- If there is not enough of the desired item in stock, the user will be informed and the application will end.

### MySQL
#### bamazon.sql

The MySQL database utilized in the Javascript files is called `bamazon_db` and includes a table called `products`.  

This file is can be cloned to your laptop or setup manually using the `bamazon.sql` file in **MySQL Workbench**.
