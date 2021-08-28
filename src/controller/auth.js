
const cookieOptions = {
  signed: true,
  path: '/users',
  expires: new Date(Date.now() + 900000),
  domain: 'localhost',
}
export const renderLogin = (req, res, next) => {
  res.render('login.pug');
}

export const postLogin = (req, res, next) => {
  if (req.body && req.body.password === '123456') {
    console.log("login post", req.body)
    res.cookie('userId', 1506, cookieOptions);
    res.redirect('/users/');
  } else {
    res.redirect('/auth/login');
  }
}

export const renderRegister = (req, res, next) => {
  res.render('register.pug');
}

export const postRegister = (req, res, next) => {
  console.log("login post", req.body)
  res.redirect('/auth/login');
}