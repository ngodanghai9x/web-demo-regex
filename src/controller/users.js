import mysql from 'mysql';
import moment from 'moment';
import query from 'config/mysql';
import { NEED_ESCAPE, TABLE } from '../ultis/constants';

// const CURRENT_TIMESTAMP = mysql.raw('CURRENT_TIMESTAMP()');
// var sql = mysql.format('UPDATE posts SET modified = ? WHERE id = ?', [CURRENT_TIMESTAMP, 42]);
export const renderForm = async (req, res) => {
  var sqlInjectString = `' or 1=1 --  `;
  try {
    const sql = `SELECT * FROM ${TABLE.USER} WHERE description='${sqlInjectString}';`
    // const sql = `SELECT * FROM ${TABLE.USER} WHERE description=${mysql.escape(temp)};`
    query(sql, res, (results) => {
      console.log("🚀 ~ file: users.js ~ line 13 ~ query ~ results", {
        results,
        sql
      })
      res.render('createUser.pug', {
        script: `<script>alert('hello')</script>`,
        userList: results || [],
      });
    })
  } catch (error) {
    console.log("🚀MY ERROR", error)
    res.render('error.pug')
  } finally {
    // conn.end()
  }
}

const needEscapeValue = (value = '') => {
  return NEED_ESCAPE ? mysql.escape(value) : value;
}

export const createUser = async (req, res) => {
  try {
    // console.log("user post/: ", {
    //   file: req.file,
    //   files: req.files
    // })
    const { name, phone, sex, website, email, birthday, description } = req.body;
    const user = {
      // account_id: null,
      name: needEscapeValue(name),
      phone: needEscapeValue(phone),
      website: needEscapeValue(website),
      email: needEscapeValue(email),
      description: needEscapeValue(description),
      // created_at: null,
      // modified_at: null,
    }
    if (!!+sex) user.sex = needEscapeValue(sex);
    if (birthday) user.birthday = moment(birthday).format('YYYY-MM-DD HH:mm:ss').toString();
    
    console.log("🚀 ~ file: users.js ~ line 49 ~ createUser ~ user", user)
    const keys = Object.keys(user).join(',');
    const values = Object.values(user).join(',');
    const insertSql = `INSERT INTO ${TABLE.USER} (${keys}) VALUES (${values});`

    query(insertSql, res, results => {
      console.log("🚀inserted", {
        insertSql,
        results
      })
      results?.insertId && res.redirect('/users/create');
    });

  } catch (error) {
    console.log("🚀MY ERROR", error)
  }
}



export const renderUsers = async (req, res) => {
  try {
    // const sql = `SELECT * FROM ${TABLE.ACCOUNT};`
    // console.log("🚀 renderUsers ~ data", data)
    // res.render('users.pug', {
    //   name: 'Hải',
    //   userList: [],
    // });
    res.sendFile(__dirname + '/users.html')
  } catch (error) {
    console.log("🚀MY ERROR", error)
    res.render('error.pug')
  } finally {
  }
}
