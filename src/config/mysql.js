import mysql from 'mysql';
// const mysql = require('mysql');

const DB_HOST = 'localhost';
const DB_PORT = 3306;
const DB_USERNAME = 'root';
const DB_PASSWORD = 'root';
const DB_DATABASE = 'demo_regex';

const config = {
	connectionLimit: 10,
	host: DB_HOST,
	port: DB_PORT,
	user: DB_USERNAME,
	password: DB_PASSWORD,
	database: DB_DATABASE
};


// const conn = connect();
let pool = {};
try {
	pool = mysql.createPool(config);
} catch (error) {
	console.log(" ~ file: mysql.js error", error)
	pool = {
		getConnection: () => { },
	};
}
const query = (sql, res, cb) => {
	const handleError = error => {
		console.log("MYSQL ERROR", error)
		return res.redirect('/error');
	}

	pool.getConnection(function (err, connection) {
		if (err) handleError(err); // not connected!

		// Use the connection
		if (!connection) return;
		connection.query(sql, function (error, results, fields) {
			cb && cb(results, fields);
			connection.release();

			// Handle error after the release.
			if (error) handleError(error);
			// Don't use the connection here, it has been returned to the pool.
		});
	});
}
export default query;

// const CURRENT_TIMESTAMP = mysql.raw('CURRENT_TIMESTAMP()');
// var sql = mysql.format('UPDATE posts SET modified = ? WHERE id = ?', [CURRENT_TIMESTAMP, 42]);

export const queryParams = (arrayQuery, res, cb) => {
	const handleError = error => {
		console.log("MYSQL ERROR", error)
		return res.redirect('/error');
	}

	pool.getConnection(function (err, connection) {
		if (err) handleError(err); // not connected!

		// Use the connection
		if (!connection) return;
		if (!arrayQuery?.length < 2) return console.log('queryParams', arrayQuery);
		
		const sql = arrayQuery[0];
		const params = arrayQuery[1]
		const query = mysql.format(sql, params);
		// connection.query(sql, params, function (error, results, fields) {
		connection.query(query, function (error, results, fields) {
			cb && cb(results, fields);
			connection.release();

			// Handle error after the release.
			if (error) handleError(error);
			// Don't use the connection here, it has been returned to the pool.
		});
	});
}

/*
create table user (
	id int not null primary key auto_increment,
	account_id int not null,
	name varchar(255) not null,
	phone varchar(15),
		sex tinyint(4), -- 0: female, 1: male, 2: bi
	website varchar(255),
	email varchar(255),
	birthday date,
	description varchar(2048)
);
create table account (
	id int not null primary key auto_increment,
	username varchar(50) not null,
	password varchar(50) not null,
		created_at timestamp default current_timestamp,
		modified_at timestamp default current_timestamp
);
 */