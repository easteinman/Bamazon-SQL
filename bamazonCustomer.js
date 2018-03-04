var inquirer = require("inquirer");
var mysql = require("mysql");
var Table = require('cli-table');

// Connection information for the SQL database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // My username
  user: "root",

  // My password
  password: "password",
  database: "bamazon_db"
});

// Connect to the mysql server and SQL database
connection.query("SELECT * FROM products", function(err, res) {
  if (err) throw err;

  // Display a welcome message to the user.
  console.log('Welcome to Bamazon! We have a wide variety of products, you are sure to find something you will like.....');

  // Used the 'cli-table' package to generate a table with the SQL database information
  var table = new Table({
    head: ['Item ID', 'Product ID', 'Department Name', 'Price', 'Stock Quantity']
    , colWidths: [10, 40, 20, 10, 20]
  });
    // Push all of the SQL info to the table
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
    // Call the start function after the table has been generated
    start();
});

// Function which starts the purchase process
function start() {
    // Begin inquirer to ask the user what they want to purchase
    inquirer
    .prompt([
      {
        name: "desiredItemID",
        type: "input",
        message: "Which of our items would you like to purchase?"
      },
      {
        name: "desiredItemQuantity",
        type: "input",
        message: "How many would you like to purchase?"
      }])
      .then(function(answer) {
      // Store the item in a variable
      var desiredItemID = answer.desiredItemID
      // Store the quantity in a variable
      var desiredItemQuantity = answer.desiredItemQuantity;
      // Check our SQL databse to see if we have enough in stock for the user to purchase.
      connection.query("SELECT stock_quantity FROM products WHERE ?", [{item_id: desiredItemID}], function(err, results) {

        if (err) throw err;
        // Checks to see if the item entered doesn't exist/is undefinied. If so, inform the user and end the server connection.
        if (results[0] == undefined){
            console.log("==========================================================");

            console.log("Sorry...looks like Item ID " + desiredItemID + " does not exist. Feel free to come back if you would like to try and purchase something else.");
            // End the connection
            connection.end();
        }

        else {
          // Set the current quantity in stock to the SQL stock_quantity for the item
          var bamazonStockQuantity = results[0].stock_quantity;
          // Check to see that we have enough in stock to sell
          if (bamazonStockQuantity < desiredItemQuantity){
            console.log("==========================================================");

            console.log("Sorry...looks like we don't have enough of this product in stock to meet your request. Feel free to come back if you would like to purchase a lower amount or something else altogether. Bye!");
            // End connection.
            connection.end();
          }
          // If the current stock is equal to or less than the desired quantity we continue with the transaction
          if (bamazonStockQuantity >= desiredItemQuantity){
            // Start by updating the SQL DB with new quantity
            // Create a new variable with the new quantity of the prodict in stock
            var newQuantity = parseInt(bamazonStockQuantity) - parseInt(desiredItemQuantity);
            // Update stock quantity in SQL DB with the new quantity, finding in SQL DB with the item_id
            connection.query("UPDATE products SET ? WHERE ?", [{stock_quantity: newQuantity}, {item_id: desiredItemID}], function(err, results){
              if(err) throw err;
            }); // End of quantity update

            // Next we need to inform the user of their purchase total
            // Create a variable for the total $ of the purchase
            var purchaseTotal;
            // Grab the price from the SQL DB
            connection.query("SELECT price FROM products WHERE ?", [{item_id: desiredItemID}], function(err, results){
                // Create a variable to hold that price
                var desiredItemPrice = results[0].price;
                // Equation to calulate the purchase total
                purchaseTotal = (desiredItemPrice * desiredItemQuantity).toFixed(2);;

                console.log("==========================================================");

                console.log("Your total for this purchase is $" + purchaseTotal + ". Thanks for visiting your local Bamazon!");

                // Ends the server connection
                connection.end();
              }); // End of Price inquiry for total cost

          }
        }

      }) // End of SQL database inquiry
    }) // End of answer function
} // End of start function