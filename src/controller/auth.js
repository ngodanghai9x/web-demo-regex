import mysql from 'mysql';
import query from '../config/mysql';
import { TABLE } from "../ultis/constants";
import { singleInsertEscaped } from '../ultis/ultis';

const cookieOptions = {
  signed: true,
  path: '/users',
  expires: new Date(Date.now() + 900000),
  domain: 'localhost',
}
export const renderLogin = (req, res, next) => {
  res.render('login.pug');
}

export const postLogin = async (req, res, next) => {
  try {
    let { username, password } = req.body;
    username = mysql.escape(username);
    password = mysql.escape(password);

    const sql = `SELECT * FROM ${TABLE.ACCOUNT} WHERE username=${username} AND password=${password}`
    // const sql1 = [`SELECT * FROM ${TABLE.ACCOUNT} WHERE username=? AND password=?`, [username, password]]
    console.log(" postLogin", {
      sql,
      body: req.body
    })
    query(sql, res, (results) => {
      console.log(" postLogin results", results?.length)
      if (results?.length === 1) {
        res.cookie('userId', 1506, cookieOptions);
        return res.redirect('/users?login=true');
      } else {
        res.render('login.pug', {
          message: 'Tài khoản hoặc mật khẩu không chính xác'
        });

        // return res.redirect('/auth/login');
      }
    });
  } catch (error) {

  }
}

export const renderRegister = (req, res, next) => {
  res.render('register.pug');
}

export const postRegister = (req, res, next) => {
  try {
    const { username, password } = req.body;

    const sql = `SELECT * FROM ${TABLE.ACCOUNT} WHERE username=${username} AND password=${password}`
    // const sql = [`SELECT * FROM ${TABLE.ACCOUNT} WHERE username=? `, [username]]
    query(sql, res, (results) => {
      if (results?.length) {
        console.log("Username đã tồn tại", results)
        res.render('register.pug', {
          message: 'Tài khoản đã tồn tại'
        });

        // return res.redirect('/auth/login');
      }
    });

    const hashedPassword = password;
    const account = {
      username: mysql.escape(username),
      password: mysql.escape(hashedPassword),
    }
    const keys = Object.keys(account).join(',');
    const values = Object.values(account).join(',');
    const sqlParams = `INSERT INTO ${TABLE.ACCOUNT} (${keys}) VALUES (${values})`
    // const sqlParams = singleInsertEscaped(TABLE.ACCOUNT, account)
    query(sqlParams, res, (results) => {
      console.log("postRegister", {
        sqlParams,
        results
      })
      if (results?.insertId) {
        res.redirect('/auth/login');
      } else {
        res.redirect('/auth/register');
      }
    });
  } catch (error) {

  }
}