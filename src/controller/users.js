import moment from 'moment';
import query from 'config/mysql';
import { TABLE } from '../ultis/constants';
import { singleInsertEscaped } from '../ultis/ultis';

export const renderForm = async (req, res) => {
  try {
    const sql = `SELECT * FROM ${TABLE.USER};`
    query(sql, res, (results) => {
      res.render('createUser.pug', {
        script: `<script>alert('hello')</script>`,
        userList: results || [],
        login: !!req.query?.login
      });
    })
  } catch (error) {
    console.log("MY ERROR", error)
    res.render('error.pug')
  } finally {
    // conn.end()
  }
}

export const createUser = async (req, res) => {
  try {
    const { name, phone, sex, website, email, birthday, description } = req.body;
    const user = {
      // account_id: null,
      name,
      phone,
      website,
      email,
      description,
      // created_at: null,
      // modified_at: null,
    }
    if (!!+sex) user.sex ;
    if (birthday) user.birthday = `'${moment(birthday).format('YYYY-MM-DD HH:mm:ss').toString()}'`;

    const sqlParams = singleInsertEscaped(TABLE.USER, user)

    query(sqlParams, res, results => {
      console.log("inserted", {
        sqlParams,
        results
      })
      results?.insertId && res.redirect('/users/create');
    });

  } catch (error) {
    console.log("MY ERROR", error)
  }
}



export const renderUsers = async (req, res) => {
  try {
    // const sql = `SELECT * FROM ${TABLE.ACCOUNT};`
    // console.log(" renderUsers ~ data", data)
    // res.render('users.pug', {
    //   name: 'Hải',
    //   userList: [],
    // });
    res.sendFile(__dirname + '/users.html')
  } catch (error) {
    console.log("MY ERROR", error)
    res.render('error.pug')
  } finally {
  }
}
