import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();
const APP_HOST = 'http://localhost';
const APP_PORT = 1107;

app.use(express.static('public')); // for folder public

app.use(cookieParser('secret-key-for-signed-cookie')); // for read cookie
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// app.use((req, res, next) => {
//   console.log('my middleware - cookie: ', req && req.cookies);
//   next();
// })
app.set('view engine', 'pug');
app.set('views', '/pages');

app.listen(APP_PORT, () => {
  console.log(`Demo regex app listening at ${APP_HOST}:${APP_PORT}`)
})

export default app;