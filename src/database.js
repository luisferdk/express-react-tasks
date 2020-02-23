/* const mongoose = require('mongoose');

const URL = 'mongodb://localhost/mern-tasks';

mongoose.connect(URL)
  .then(db => console.log('DB is connected'))
  .catch(err => console.error(err));

module.exports = mongoose; */

const mysql = require('mysql');

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database:'tasks'
});

db.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});


module.exports = { db };