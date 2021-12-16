import express from 'express';
import { renderLogin, postLogin, renderRegister, postRegister } from 'controller/auth.js';

const router = express.Router();
// /auth
router.get('/login', renderLogin);
router.post('/login', postLogin);

router.get('/register', renderRegister);
router.post('/register', postRegister);

export default router;