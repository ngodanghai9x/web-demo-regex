import conn from '../config/mysql';
import { myPath } from '../config/path';

export const createUser = (req, res) => {
  console.log("user post/: ", req.body, req.file, req.files)
  // console.log("------------- 33333333333333 ", req)
  res.redirect('/');
  createConnection
}

export const renderForm = (req, res) => {
  console.log('renderForm myPath: ', myPath())
  console.log("user get/: ", req.body)
  res.render('users.pug', {
    name: 'Hải',
    userList: [],
  });
}
