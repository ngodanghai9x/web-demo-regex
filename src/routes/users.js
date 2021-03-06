import express from 'express';
import multer from 'multer';

import { requireAuth } from 'middlewares/requireAuth.js';
import { createUser, renderForm, renderUsers } from 'controller/users.js';

const upload = multer({ dest: './public/upload_files' }) // for parsing multipart/form-data

const router = express.Router();
// /users
router.get('/', requireAuth, renderForm)
router.get('/create', requireAuth, renderForm)
router.get('/list', renderUsers)

router.post('/create', upload.array('photos', 5), createUser)
// router.post('/create', upload.single('photos'), createUser)

const cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])
router.post('/create/test', cpUpload, createUser)

export default router;