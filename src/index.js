
// require('dotenv').config();
// console.log('------1', process.env)
import app from 'myConfig/app.js';
import userRoute from 'routes/users.js';
import authRoute from 'routes/auth.js';
import { requireAuth } from 'middlewares/requireAuth.js';


app.use('/users', requireAuth, userRoute);
app.use('/auth', authRoute);

app.get('/', (req, res) => {
  res.render('home.pug', {
    name: 'Hải',
  });
});

app.get('/error', (req, res) => {
  res.render('error.pug');
})




