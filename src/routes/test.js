import express from 'express';
import { requireAuth } from '../middlewares/requireAuth';

const routerTest = express.Router();

routerTest.get('/', async (req, res, next) => {
  // var a = {
  //   // head: req.headers['x-forwarded-for'],
  //   ip: req.ip,
  //   ips: req.ips,
  // }
  console.log(req)
  res.json(1)
});


export default routerTest;