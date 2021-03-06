import express from 'express';
import { renderLogin, postLogin, renderRegister, postRegister } from 'controller/auth.js';
import { validateRegister, validateLogin } from '../middlewares/validateRegister';
import { requireAuth } from '../middlewares/requireAuth';
import { postChangePassword, renderChangePassword } from '../controller/auth';

const router = express.Router();
// /auth
router.get('/login', renderLogin);
router.post('/login', validateLogin, postLogin);

router.get('/logout', (req,res) => {
  res.clearCookie("login")
  res.clearCookie("username")
  // res.redirect('/auth/login')
  res.send(`<h2><a class="nav-link" href="/auth/login">Đăng Nhập</a></h2>`)
});

router.get('/register', renderRegister);
router.post('/register',validateRegister, postRegister);

router.get('/change-password', requireAuth, renderChangePassword);
router.post('/change-password',requireAuth, postChangePassword);

export default router;