var models = require('../models');
const Promise = require('bluebird');

module.exports = {
  messages: {
    get: function (req, res) {
      res.statusCode = 200;
      res.end();
      
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      res.statusCode = 201;
      res.end();
    // a function which handles posting a message to the database
    },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
  }
};

