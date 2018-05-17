var connection = require("../config/connection");


function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }

//ORM
var orm = {
    //Selects all the data from the burgers table
    selectAll: function(burgersTable, callback) {
        var queryString = "SELECT * FROM ??" ;
        console.log(queryString);

        connection.query(queryString, [burgersTable], function(err, result) {
            if (err) {
                throw err;
              }
            callback(result);
        });
    },

    //inserts a burger to the database and updates
    insertOne: function(newBurger, callback) {
        var queryString = "INSERT INTO burgers SET ?";
        console.log(queryString);

        connection.query(queryString, {burger_name: newBurger.burger_name, devoured: false}, function (err, res) {
                if (err) throw err;
                //console.log(res);
                callback(res);
            });
    },
    //updates the burger when eaten
    updateOne: function(objColVals, condition, callback) {

        console.log("col in sql " + objToSql(objColVals));
        //console.log("objcolvals " + objColVals);

        var queryString = "UPDATE burgers SET devoured = !devoured" /* + objToSql(objColVals) */ + " WHERE " + condition;
        console.log(queryString);
        //console.log("devoured:" + devoured);
        console.log("Burger ID: " + condition)


        //burgerId = JSON.stringify(condition);
        //console.log("Parsed Burger ID: " + condition)

        connection.query(queryString, function (err, res) {
            if (err) throw err;
            //console.log(burgerId + " devoured: " + devoured);
            callback(res);
        });
    }
};

module.exports = orm;