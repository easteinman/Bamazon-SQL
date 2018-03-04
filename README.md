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

## Demos
### Quick Links

 - [Successful Transaction](https://github.com/ericsteinman/Bamazon-SQL#successful-transaction)
 - [Unsuccessful Transaction due to Unavailable Quantity](https://github.com/ericsteinman/Bamazon-SQL#unsuccessful-transaction-due-to-unavailable-quantity)
 - [Unsuccessful Transaction due to Invalid Item ID](https://github.com/ericsteinman/Bamazon-SQL#unsuccessful-transaction-due-to-invalid-item-id)
 


----------


### Successful Transaction
1. Run node `bamazonCustomer.js` in the terminal to begin the checkout experience.
2. The user will then be welcomed to the store and a table will display all of the available products and their information, followed by the question:

	> Which of our items would you like to purchase?

	![Initial Prompt](https://lh3.googleusercontent.com/beOMFcoxsvyK5CpqvxCjibuN4Tln4vDwjPt2NH6Wfh9PAbv5OFlokUewwlg8k3o9OBoy-Bab4Fg "Initial Prompt")
3. The user will then enter the `Item ID` for the item they would like to purchase. This is followed by the question:
	> How many would you like to purchase?
	
	![Quantity](https://lh3.googleusercontent.com/0oSCgGH5u6Gd9nmjMxaLOIqKqWXQHI_CQN9HEMxrniRkXOe18uNS5pPFPEeEl22Z9f-edhJgJJg "Quantity")
4. After entering the quantity desired, the application calculates and displays the total to the user and thanks them for their purchase. The connection is then ended, success!

	![Total -- Success](https://lh3.googleusercontent.com/C3ZJpwAc7hVjpFXCamaZHExY79uKxgjDmrEEHqnGe0wfOePPP6u1s0wwuk3phkNn07VMleItjJE "Successful Total")


----------


### Unsuccessful Transaction due to Unavailable Quantity
1. Run node `bamazonCustomer.js` in the terminal to begin the checkout experience.
2. The user will then be welcomed to the store and a table will display all of the available products and their information, followed by the question:

	> Which of our items would you like to purchase?
	
	![enter image description here](https://lh3.googleusercontent.com/5sWMja40Tlohdl6-JAHX7S1cupUSeXKHMNHGgb11jK5v-U45SQPSybwQK50dswdGyVqobgXeZ2Y)
3. The user will then enter the `Item ID` for the item they would like to purchase. This is followed by the question:
	> How many would you like to purchase?

	![enter image description here](https://lh3.googleusercontent.com/gV4BfIW3FOAnp1AnbjpKeoZ9kDpqzGwRynWDz4WsolhNL_k3uyKkAbmsEsO1rm25W3m0xdxCkn8)
4. After entering a quantity higher than what is in stock, the application notifies the user and asks them to come back again. The connection is ended.

	![Unsuccessful Quantity Result](https://lh3.googleusercontent.com/qCErrE-R6sMEu9K_FlC9nQHhggZ0LiHn4em05EkKSP0nFGeONfaJj74zoHm9WLzPM7OaNwrH1EE)


----------
### Unsuccessful Transaction due to Invalid Item ID
1. Run node `bamazonCustomer.js` in the terminal to begin the checkout experience.
2. The user will then be welcomed to the store and a table will display all of the available products and their information, followed by the question:

	> Which of our items would you like to purchase?

	![Item ID](https://lh3.googleusercontent.com/KcghRwn-NxP3l05BJyavtcJSiacfZ6_NItGKwueknxG_Tbo3bi2A3BRdSbIWsCcxM8Fs7xBw38o)
3. The user will then enter the `Item ID` for the item they would like to purchase. This is followed by the question:
	> How many would you like to purchase?

	![Quantity](https://lh3.googleusercontent.com/hroPiomQ8uQpK1lWieBg-r6R_BQ3wopA21dnzfvwHR-YxzdzAnHS3yj_jAAO_cHFEQzM44SBIt0)
4. After entering a quantity, the application checks and discovers that `Item ID` does not exist. The user is notified and the connection is ended.

	![Unsuccessful Item ID](https://lh3.googleusercontent.com/IqwvPSjie56bgBw7yyPwZVdu1E_33GiD2B1CWfGrl7wQGiRHm47iN3wk2OMJLvVin34PhXrAGQ4)

