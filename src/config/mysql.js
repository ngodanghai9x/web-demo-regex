import mysql from 'mysql';

const DB_HOST = 'localhost';
const DB_PORT = 3306;
const DB_USERNAME = 'root';
const DB_PASSWORD = 'root';
const DB_DATABASE = 'demo_regex';

const conn = mysql.createConnection({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE
});

// conn.connect(err => {
//   if (err) throw err;
//   console.log("Mysql is connected!");
// });

export default conn;

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
    decription varchar(2048)
);
create table account (
	id int not null primary key auto_increment,
	username varchar(50) not null,
	password varchar(50) not null,
    created_at timestamp default current_timestamp,
    modified_at timestamp default current_timestamp
);
 */