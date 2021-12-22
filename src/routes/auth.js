import express from 'express';
import { renderLogin, postLogin, renderRegister, postRegister } from 'controller/auth.js';
import { validateRegister, validateLogin } from '../middlewares/validateRegister';

const router = express.Router();
// /auth
router.get('/login', renderLogin);
router.post('/login', validateLogin, postLogin);

router.get('/register', renderRegister);
router.post('/register',validateRegister, postRegister);

export default router;