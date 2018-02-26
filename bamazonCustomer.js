var mysql = require("mysql");
var inquirer = require("inquirer");

// Connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // My username
  user: "root",

  // My password
  password: "09060108",
  database: "bamazon_db"
});

// Connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});

// function which prompts the user for what action they should take
function start() {
  inquirer
    .prompt([
      {
        name: "productToBuy",
        type: "input",
        message: "Welcome to Bamazon! What is the ID of the product you would like to purchase?",
      },
      {
        name: "quantity",
        type: "input",
        message: "How many would you like to purchase?"
      }
    ])
    .then(function(answer) {
        // based on their answer, either call the bid or the post functions
        if (answer.postOrBid.toUpperCase() === "POST") {
          postAuction();
        }
        else {
          bidAuction();
        }
    });
}