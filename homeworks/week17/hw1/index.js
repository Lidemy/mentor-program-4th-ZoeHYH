const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('connect-flash');

const app = express();
const port = 5001;
app.set('view engine', 'ejs');

const userController = require('./controllers/user');
const contentController = require('./controllers/content');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
  }),
);
app.use(flash());
app.use((req, res, next) => {
  res.locals.username = req.session.username;
  res.locals.errMessage = req.flash('errMessage');
  next();
});

function redirectBack(req, res) {
  res.redirect(304, 'back');
}

app.get('/', contentController.index);
app.get('/list', contentController.list);
app.get('/article/:id', contentController.article);

app.get('/admin', contentController.admin);
app.get('/post', contentController.post);
app.post('/do_post', contentController.do_post, redirectBack);
app.post('/edit', contentController.edit);
app.post('/do_edit', contentController.do_edit, redirectBack);
app.post('/do_delete', contentController.do_delete, redirectBack);

app.get('/login', userController.login);
app.post('/do_login', userController.do_login, redirectBack);
app.get('/logout', userController.do_logout);

app.listen(port, () => {
  console.log(`Blog's app listening on port ${port}!`);
});
