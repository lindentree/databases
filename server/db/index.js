var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "student",  password   = student, //root
// and to the database "chat".

var dbConnection = mysql.createConnection({
  user: 'student',
  password: 'student',
  database: 'chat'
});

dbConnection.connect(function(err) {
  if (!err) {
    console.log('Successful connection');
  } else {
    console.log('Error connecting');
  }
  
});

// dbConnection.post();

// dbConnection.get();

// dbConnection.query (sql, values, function(err) {
//     if (err) {
//       throw err;
//     }

//     console.log(values);
//   });

// dbConnection.end();



module.exports = dbConnection; 