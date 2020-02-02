const mysql = require("mysql");

// Create a connection to the database
const connection = mysql.createConnection({
  host: "x3ztd854gaa7on6s.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "o3v3i17odtwg5dsx",
  password: "c0k7wdsdnt0ogtmp",
  database: "dw6jnaultby36f5b"
});

// open the MySQL connection
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = connection;