var mysql = require('mysql');
var DB_HOST = 'localhost';
var DB_PORT = 3306;
var DB_USERNAME = 'root';
var DB_PASSWORD = 'root';
var DB_DATABASE = 'demo_regex';

var config = {
	connectionLimit: 10,
	host: DB_HOST,
	port: DB_PORT,
	user: DB_USERNAME,
	password: DB_PASSWORD,
	database: DB_DATABASE
};
var pool = mysql.createPool(config);

pool.getConnection(function (err, connection) {
  if (err) handleError(err);

  if (!connection) return;
  connection.query(sql, function (error, results, fields) {


    
    connection.release();

    if (error) handleError(error);
  });
});

var a = ['a','b','c'].map((id) =>  mysql.escape(id)).join(',')
console.log(" ~ file: test_mysqljs.js ~ line 5 ~ a", a)
// ['a','b','c'].map(async (id) =>  await mysql.escape(id)).join(',')