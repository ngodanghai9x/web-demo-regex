import sha1 from 'crypto-js/sha1';
import mysql from 'mysql';
import query from '../config/mysql';
import { TABLE } from "../ultis/constants";

const cookieOptions = {
  signed: true,
  path: '/',
  expires: new Date(Date.now() + 900000),
  domain: 'localhost',
}
export const renderLogin = (req, res, next) => {
  res.render('login.pug');
}

export const postLogin = async (req, res, next) => {
  try {
    let { username, password } = req.body;
    const hashedPassword = sha1(password).toString();

    const sql = `SELECT * FROM ${TABLE.ACCOUNT} 
      WHERE username=${mysql.escape(username)} AND password=${mysql.escape(hashedPassword)}`
    console.log(" postLogin", {
      sql,
      body: req.body
    })
    query(sql, res, (results) => {
      if (results?.length === 1) {
        res.cookie('username', username, cookieOptions);
        res.cookie('login', 'true', cookieOptions);
        return res.redirect('/auth/change-password');
      } else {
        const error = `Tài khoản hoặc mật khẩu không chính xác`;
        return res.redirect(`/auth/login?error=${error}`);
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

    const hashedPassword = sha1(password).toString();
    const account = {
      username: mysql.escape(username),
      password: mysql.escape(hashedPassword),
    }
    const sql = `SELECT * FROM ${TABLE.ACCOUNT} WHERE username=${account.username}`
    query(sql, res, (results) => {
      if (results?.length) {
        console.log("Username đã tồn tại", results)
        res.render('register.pug', {
          message: 'Tài khoản đã tồn tại'
        });
      } else {
        const keys = Object.keys(account).join(',');
        const values = Object.values(account).join(',');
        const sqlParams = `INSERT INTO ${TABLE.ACCOUNT} (${keys}) VALUES (${values})`
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
      }
    });


  } catch (error) {

  }
}

export const renderChangePassword = (req, res, next) => {
  res.render('changePassword.pug');
}

export const postChangePassword = async (req, res, next) => {
  try {
    let { username } = req.signedCookies;
    let { oldPassword, password } = req.body;
    const hashedPassword = sha1(password).toString();
    const hashedOldPassword = sha1(oldPassword).toString();

    username = mysql.escape(username);
    oldPassword = mysql.escape(hashedOldPassword);
    password = mysql.escape(hashedPassword);


    const sql = `SELECT * FROM ${TABLE.ACCOUNT} WHERE username=${username} AND password=${oldPassword}`

    query(sql, res, (results) => {
      console.log("results", { sql, length: results?.length })
      if (results?.length === 1) {
        const sqlParams = `UPDATE ${TABLE.ACCOUNT} SET password=${password} WHERE username=${username}`
        query(sqlParams, res, (results) => {
          console.log("update query", {
            sqlParams,
            results
          })
          if (results?.changedRows) {
            return res.redirect('/auth/change-password?changed=true');
          } else {
            return res.redirect('/auth/change-password?changed=false');
          }
        });
        // dont call res here
        // return res.redirect('/auth/change-password?changed=true');
      } else {
        return res.redirect('/auth/change-password?changed=false');

      }
    });
  } catch (error) {

  }
}