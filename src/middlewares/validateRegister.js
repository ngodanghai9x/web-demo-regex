import { REGEX, ERROR, MyError } from "../ultis/constants";


export const validateRegister = (req, res, next) => {
  try {
    if (!req?.body) {
      throw new MyError(`Body request is missing`);
    }
    const { username, password } = req.body;

    if (!username || !password) {
      throw new MyError(`Tài khoản và mật khẩu không được để trống!`);
    }

    if (!REGEX.username.regex.test(username)) {
      throw new MyError(REGEX.username.error)
    }
    if (!REGEX.password.regex.test(password)) {
      throw new MyError(REGEX.password.error)
    }

    next();
  } catch (error) {
    res.redirect(`/auth/register?error=${error.message || ERROR.default}`);
  }

}

export const validateLogin = (req, res, next) => {
  try {
    if (!req?.body) {
      throw new MyError(`Body request is missing`);
    }
    const { username, password } = req.body;

    if (!username || !password) {
      throw new MyError(`Tài khoản và mật khẩu không được để trống!`);
    }

    if (!REGEX.username.regex.test(username)) {
      throw new MyError(REGEX.username.error)
    }
    // if (!REGEX.password.regex.test(password)) {
    //   throw new MyError(REGEX.password.error)
    // }

    next();
  } catch (error) {
    res.redirect(`/auth/login?error=${error.message || ERROR.default}`);
  }
}