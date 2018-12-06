var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "student",  password   = student, //root
// and to the database "chat".

var dbConnection = mysql.createConnection({
  user: 'student',
  password: 'student',
  database: 'chat'
});

dbConnection.connect();

dbConnection.query (sql, values, function(err) {
  connection.end();
  
  if (err) {
    throw err;
  }
});

dbConnection.end();



module.exports = dbConnection; 