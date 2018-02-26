var mysql = require("mysql");
var inquirer = require("inquirer");

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
connection.connect(function(err) {
  if (err) throw err;
});