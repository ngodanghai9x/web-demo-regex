import conn from 'config/mysql';

export const createUser = (req, res) => {
  console.log("user post/: ", req.body, req.file, req.files)
  res.redirect('/');
  createConnection
}

export const renderForm = (req, res) => {
  console.log("user get/: ", req.body)
  res.render('users.pug', {
    name: 'Hải',
    userList: [],
  });
}
