const express = require("express");
const mysql = require("mysql");
const app = express();

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345",
    database: "nodeapp"
});
  
con.connect(function (err) {
  if (err) throw err;
});

app.post("/api/CreateAccount", function(req, res) {
    console.log("Connected! Insert Now");
    var sql = "INSERT INTO users_two (name, email, password) VALUES ('"+req.body.userName+"','"+req.body.userEmail+"','"+req.body.userPassword+"')";
    con.query(sql, function (err, result) {
      if(err) throw err;
      console.log("1 record inserted");
    });
});

app.listen(8000, function(){
    console.log("Listening on port 8000");
});