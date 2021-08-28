import mysql from 'mysql';

const DB_HOST = 'localhost';
const DB_PORT = 3306;
const DB_USERNAME = 'root';
const DB_PASSWORD = 'root';
const DB_DATABASE = 'demo_regex';
// const conn = {}

const conn = mysql.createConnection({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE
});

conn.connect(err => {
  if (err) throw err;
  console.log("Mysql is connected!");
});

// conn.end = (err) => {
//   if (err) throw err;
//   console.log("Mysql is disconnected!");
//   conn.end();
// };

export default conn;