const mysql = require("mysql");

// Create a connection to the database
const connection = mysql.createConnection({
  host: "us-cdbr-iron-east-04.cleardb.net",
  //port: 3306,
  user: "b5706c19dde0d6",
  password: "beae3e07",
  database: "heroku_9e4eacb08b0f0bb"
});

//mysql://b5706c19dde0d6:beae3e07@us-cdbr-iron-east-04.cleardb.net/heroku_9e4eacb08b0f0bb?reconnect=true


// open the MySQL connection
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = connection;