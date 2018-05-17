// Import the ORM to create functions that will interact with the database.
//var orm = require("../config/orm.js");


// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Character" model that matches up with DB
var Burger = sequelize.define("burgers", {
  // name string
  burger_name: Sequelize.STRING,
  // devoured boolean
  devoured: Sequelize.BOOLEAN
}, {
  timestamps: false
});

// Syncs with DB
Burger.sync();

// Makes the Burger Model available for other files (will also create a table)
module.exports = Burger;

