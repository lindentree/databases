var models = require('../models');
const Promise = require('bluebird');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(err, results) {
        //if (err) { console.log(err) }
        res.json(results);
      });
    
      
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      
      var params = [req.body.message, req.body.roomname];
      //console.log(params);
      models.messages.post(params, function(err, results) {
        if (err) { console.log(err); }
        res.sendStatus(201);
      });

      //res.end();
    // a function which handles posting a message to the database
    },
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(err, results) {
        if (err) { console.log(err); }
        res.json(results);
      });
    },
    post: function (req, res) {
      var params = [req.body.username];
      models.users.post(params, function(err, results) {
        if (err) { console.log(err); }
        res.sendStatus(201);
      });
      //res.end();
    }
  }
};

