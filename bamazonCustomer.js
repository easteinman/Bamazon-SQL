var mysql = require("mysql");
var prompt = require('prompt');
var Table = require('cli-table');

// Connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // My username
  user: "root",

  // My password
  password: "",
  database: "bamazon_db"
});

// Connect to the mysql server and sql database
connection.query("SELECT * FROM products", function(err, res) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user

  // Show User message
  console.log('Welcome to Bamazon! We have a wide variety of products, you are sure to find something you will like.....\n');

  var table = new Table({
    head: ['Item ID', 'Product ID', 'Department Name', 'Price', 'Stock Quantity']
  , colWidths: [10, 40, 20, 10, 20]
});
    // Push all of the variables to the table
    table.push(
        [res[0].item_id, res[0].product_name, res[0].department_name, '$' + res[0].price, res[0].stock_quantity]

        , [res[1].item_id, res[1].product_name, res[1].department_name, '$' + res[1].price, res[1].stock_quantity]

        , [res[2].item_id, res[2].product_name, res[2].department_name, '$' + res[2].price, res[2].stock_quantity]

        , [res[3].item_id, res[3].product_name, res[3].department_name, '$' + res[3].price, res[3].stock_quantity]

        , [res[4].item_id, res[4].product_name, res[4].department_name, '$' + res[4].price, res[4].stock_quantity]

        , [res[5].item_id, res[5].product_name, res[5].department_name, '$' + res[5].price, res[5].stock_quantity]

        , [res[6].item_id, res[6].product_name, res[6].department_name, '$' + res[6].price, res[6].stock_quantity]

        , [res[7].item_id, res[7].product_name, res[7].department_name, '$' + res[7].price, res[7].stock_quantity]

        , [res[8].item_id, res[8].product_name, res[8].department_name, '$' + res[8].price, res[8].stock_quantity]

        , [res[9].item_id, res[9].product_name, res[9].department_name, '$' + res[9].price, res[9].stock_quantity]

    );

    // Displays the table to the user
    console.log(table.toString());
    start();
});

// function which prompts the user for the item and quantity desired
function start() {
    prompt.start();
        // Ask for Item ID
        console.log('\nWhich of our items would you like to purchase?');
        prompt.get(['desiredItemID'], function (err, result) {
            var desiredItemID = result.desiredItemID

            // Then ask for Quanity (once user completed first entry)
            console.log('\nHow many would you like to purchase?')
            prompt.get(['desiredItemQuantity'], function (err, result) {
            // Show quantity selected
            var desiredItemQuantity = result.desiredItemQuantity;

            connection.query("SELECT * FROM products", function(err, results) {
                if (err) throw err;
            });
        });
    });
}