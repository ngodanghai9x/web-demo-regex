import express from 'express';
import multer from 'multer';

import { requireAuth } from 'middlewares/requireAuth.js';
import { createUser, renderForm, renderUsers } from 'controller/users.js';

// const upload = multer({ dest: './public/upload_files' }) // for parsing multipart/form-data
// https://www.digitalocean.com/community/tutorials/how-to-use-ejs-to-template-your-node-application
const router = express.Router();

router.get('/', function (req, res, next) {
  var links = [
    { href: 'http://recruit.framgia.vn/', text: 'Framgia Việt Nam Tuyển Dụng' },
    { href: 'https://www.facebook.com/FramgiaVietnam/', text: 'Framgia Việt Nam Facebook' },
    { href: 'https://viblo.asia/', text: 'Viblo by Framgia' },
    { href: '/', text: 'Text Link 1' },
    { href: '/', text: 'Text Link 2' },
    { href: '/', text: 'Text Link 3' },
    { href: '/', text: 'Text Link 4' },
  ];
  var headline = 'Framgia Viet Nam';
  var tagline = "IT là lĩnh vực công bình và không giới hạn, nơi mỗi cá nhân được chia sẻ cơ hội và nhìn nhận thông qua nỗ lực thực sự. Tận dụng những lợi thế của IT mang lại, chúng tôi không ngừng hoàn thiện, trở thành nền tảng cho sự phát triển dịch vụ toàn cầu.";
  res.render('pages/index', {
    links: links,
    headline: headline,
    tagline: tagline,
  });
});

router.get('/about', function(req, res) {
  res.render('pages/about');
});

export default router;
