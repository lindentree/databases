var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {

      var queryStr = 'select messages.id, messages.content, messages.room, users.username \
                      from messages left outer join users on (messages.id = users.id) \
                      order by messages.id desc';

      db.query(queryStr, (err, results) => {
        callback(err, results);

      });

    //res.end(test);
      
    }, // a function which produces all the messages
    post: function (params, callback) {
      var queryStr = 'INSERT INTO messages (content, id, room) \
                      VALUE (?,  (select id from users where username = ? limit 1), ?)';

      db.query(queryStr, params, function(err, results) {
        if (err) { 
          callback(err, results);
        }
      });

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      var queryStr = 'SELECT * FROM users';
      db.query(queryStr, function(err, results) {
        callback(err, results);
      });

    },
    post: function (params, callback) {
      var queryStr = 'INSERT INTO users(username) VALUES (?)';
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    }
  }
};

