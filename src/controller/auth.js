import mysql from 'mysql';
import query from '../config/mysql';
import { NEED_ESCAPE, SQLI_REGEX, TABLE } from "../ultis/constants";

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
    var sqlInjectString = `' or 1=1 --  `;
    // if (SQLI_REGEX.test(username) || SQLI_REGEX.test(password)) {
    //   console.log("postLogin ~ SQLI_REGEX", req.body)
    //   res.render('login.pug', {
    //     message: 'Tài khoản hoặc mật khẩu có chứa kí tự lạ'
    //   });
    // }
    debugger
    username = NEED_ESCAPE ? mysql.escape(username) : `'${username}'`;
    password = NEED_ESCAPE ? mysql.escape(password) : `'${password}'`;
    const sql = `SELECT * FROM ${TABLE.ACCOUNT} WHERE username=${username} AND password=${password}`
    // const sql1 = [`SELECT * FROM ${TABLE.ACCOUNT} WHERE username=? AND password=?`, [username, password]]
    console.log("🚀 postLogin", {
      sql,
      body: req.body
    })
    query(sql, res, (results) => {
      console.log("🚀 postLogin results", results?.length)
      if (results?.[0]) {
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
    let { username, password } = req.body;
    debugger
    const account = {
      username: mysql.escape(username),
      password: mysql.escape(password),
    }
    const keys = Object.keys(account).join(',');
    const values = Object.values(account).join(',');
    const insertSql = `INSERT INTO ${TABLE.ACCOUNT} (${keys}) VALUES (${values})`
    query(insertSql, res, (results) => {
      console.log("🚀 postRegister", {
        insertSql,
        results
      })
      if (results?.insertId) {
        return res.redirect('/auth/login');
      } else {
        return res.redirect('/auth/register');
      }
    });
  } catch (error) {

  }
}