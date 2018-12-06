var db = require('../db');

module.exports = {
  messages: {
    get: function (req, res) {
      
    }, // a function which produces all the messages
    post: function (req, res) {
      var msg = request.json;
      var body = msg.message;

      db.query('INSERT INTO messages (content) VALUES ' + body, body, function(err, results) {
        if (err) { 
          throw err;
        }
      });

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

