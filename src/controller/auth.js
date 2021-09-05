import mysql from 'mysql';
import query from '../config/mysql';
import { NEED_ESCAPE, TABLE } from "../ultis/constants";

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
    debugger
    if (!NEED_ESCAPE) {
      username = NEED_ESCAPE ? mysql.escape(username) : `"${username}"`;
      password = NEED_ESCAPE ? mysql.escape(password) : `"${password}"`;
    }
    const sql = `SELECT * FROM ${TABLE.ACCOUNT} WHERE username=${username} AND password=${password};`
    console.log("🚀 ~ file: auth.js ~ line 24 ~ postLogin ~ sql", {
      sql,
      body: req.body
    })
    query(sql, res, (results) => {
      console.log("🚀 ~ file: auth.js ~ line 25 ~ query ~ results", results)
      if (results?.[0]) {
        res.cookie('userId', 1506, cookieOptions);
        return res.redirect('/users');
      } else {
        return res.redirect('/auth/login');
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
    const insertSql = `INSERT INTO ${TABLE.ACCOUNT} (${keys}) VALUES (${values});`
    query(insertSql, res, (results) => {
      console.log("🚀 ~ file: auth.js ~ line 25 ~ query ~ results", results)
      if (results?.[0]) {
        return res.redirect('/auth/login');
      } else {
        return res.redirect('/auth/register');
      }
    });
  } catch (error) {

  }
}