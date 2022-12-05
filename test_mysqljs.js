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

// var connection = mysql.createConnection(config);

// connection.connect(function(err) {
//   if (err) {
//     console.error('error connecting: ' + err.stack);
//     return;
//   }

//   console.log('connected as id ' + connection.threadId);
// });

// connection.query('SELECT 1', function (error, results, fields) {
//   if (error) throw error;
//   console.log('connected as id ' + connection.threadId);
// });

// connection.query('SELECT 1', function (error, results, fields) {
//   if (error) throw error;
//   console.log('connected as id ' + connection.threadId);
// });

// connection.end(function(err) {
//   // The connection is terminated now
// });

var pool  = mysql.createPool(config);

pool.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log("🚀 ~ file: test_mysqljs.js ~ line 48 ~ pool", pool)
  console.log('The solution is: ', results[0].solution);
});

// pool.query('SELECT 1 + 1 AS solution').then(console.log).catch(console.log)
// var pool = mysql.createPool(config);

// pool.getConnection(function (err, connection) {
//   if (err) handleError(err);

//   if (!connection) return;
//   connection.query(sql, function (error, results, fields) {


    
//     connection.release();

//     if (error) handleError(error);
//   });
// });

// var a = ['a','b','c'].map((id) =>  mysql.escape(id)).join(',')
// console.log(" ~ file: test_mysqljs.js ~ line 5 ~ a", a)
// ['a','b','c'].map(async (id) =>  await mysql.escape(id)).join(',')