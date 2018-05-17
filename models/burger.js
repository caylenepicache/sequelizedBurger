// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

//create the code that will call the ORM functions using burger specific input for the ORM.



var burger = {
  all: function(callback) {
    orm.selectAll("burgers", function(res) {
      callback(res);
    });
  },

  // The variables cols and vals are arrays.
  create: function(newBurger, callback) {
    orm.insertOne(newBurger, function(res) {
      callback(res);
    });
  },
  update: function(objColVals, condition, callback) {
    orm.updateOne(objColVals, condition, function(res) {
      callback(res);
    });
  }
};

// Export the database functions for the controller (burger.js).
module.exports = burger;
