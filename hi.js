var inquirer = require("inquirer")
var mysql = require("mysql")

var connection = mysql.createConnection({
   host: "localhost",

   // Your port; if not 3306
   port: 3306,

   // Your username
   user: "root",

   // Your password
   password: "root",
   database: "top_songsDB"
});

connection.connect(function (err) {
   if (err) throw err;
   console.log("Connection Successful!");
   promptUser();
});

function promptUser() {
   connection.query("SELECT * FROM top5000", function (err, results) {
       if (err) throw err;
       inquirer.prompt([
           {
               name: "command",
               message: "Type an artist name.",
               type: "input"
           }
       ]).then(function (arg) {
           showItems(arg.command);
       });
   });
}

function showItems(artist) {
   var query = connection.query("SELECT * FROM top5000 WHERE artist=?", [artist], function (err, res) {
       // logs the actual query being run
       console.log(query.sql);
       for (var i = 0; i < res.length; i++) {
           console.log(res[i].position + " | " + res[i].artist + " | " + res[i].song + " | " + res[i].year);
       }
       moreThanOnce();
   })
}