export const requireAuth = (req, res, next) => {
  console.log("requireAuth signedCookies", { cookie: req.signedCookies, req: req.cookies })
  if (!req?.signedCookies) {
    res.redirect('/auth/login');
    return;
  }
  const { username, login } = req.signedCookies;
  // console.log("~ file: requireAuth.js ~ line 8 ~ requireAuth ~ username, login", username, login)
  if (!!username && login === 'true') {
    next();
  } else {
    res.redirect('/auth/login');

  }

}

export const requireAuth1 = (req, res, next) => {
  next();
}