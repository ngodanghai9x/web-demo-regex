import mysql from 'mysql';
import conn from 'config/mysql';
import { TABLE } from '../ultis/constants';

// const CURRENT_TIMESTAMP = mysql.raw('CURRENT_TIMESTAMP()');
// var sql = mysql.format('UPDATE posts SET modified = ? WHERE id = ?', [CURRENT_TIMESTAMP, 42]);
export const renderForm = async (req, res) => {
  try {
    const sql = `SELECT * FROM ${TABLE.USER};`
    const data = await conn.query(sql, (err, results) => {
      if (err) throw err;
      console.log("🚀 ~ file: users.js ~ line 14 ~ data ~ results", results)
      return results;
    });

    res.render('users.pug', {
      name: 'Hải',
      userList: [],
    });
  } catch (error) {
    console.log("🚀", error)
    res.render('error.pug')
  }
}

export const createUser = async (req, res) => {
  try {
    console.log("user post/: ", {
      file: req.file,
      files: req.files
    })
    await conn.connect();
    const user = {
      account_id: null,
      name: req.body?.name,
      phone: req.body?.phone,
      sex: req.body?.sex,
      website: req.body?.website,
      email: req.body?.email,
      birthday: req.body?.email,
      description: req.body?.description,
      created_at: null,
      modified_at: null,
    }
    const keys = Object.keys(user).join(',');
    const values = Object.values(user).map(val => NEED_ESCAPE ? mysql.escape(val) : val).join(',');
    const insertSql = `INSERT INTO ${TABLE.USER} (${keys}) VALUES ${values};`
    await conn.query(insertSql);
  } catch (error) {
    console.log("🚀", error)
  } finally {
    await conn.end();
    res.redirect('/');
  }
}



export const renderUsers = async (req, res) => {
  try {
    await conn.connect();
    const sql = `SELECT * FROM ${TABLE.USER};`
    const data = await conn.query(sql);
    console.log("🚀 renderUsers ~ data", data)
    res.render('users.pug', {
      name: 'Hải',
      userList: [],
    });
  } catch (error) {
    console.log("🚀", error)
    res.render('error.pug')
  } finally {
    await conn.end();
  }
}
