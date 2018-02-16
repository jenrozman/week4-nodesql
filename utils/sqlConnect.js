var mysql = require('mysql');
var config = require('../config');

var connect = mysql.createConnection({
  host: config.host, //hiding
  port: config.port,
  user: config.user,
  password: config.password,
  database: config.database
});

module.exports = connect;
