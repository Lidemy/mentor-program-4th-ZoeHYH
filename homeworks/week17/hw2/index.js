const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('connect-flash');
const multer = require('multer');
const cors = require('cors');
const prizeController = require('./controllers/prize');

const app = express();
const port = 5002;
const upload = multer({ storage: multer.memoryStorage() });

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
}));
app.use(flash());
app.use((req, res, next) => {
  res.locals.username = req.session.username;
  res.locals.errMessage = req.flash('errMessage');
  next();
});

function redirectBack(req, res) {
  res.redirect(304, 'back');
}

app.get('/admin', prizeController.admin);
app.post('/add', upload.single('image'), prizeController.add, redirectBack);
app.post('/updateImg', upload.single('image'), prizeController.updateImg, redirectBack);
app.post('/update', prizeController.update, redirectBack);
app.post('/delete', prizeController.delete, redirectBack);
app.get('/getPrize', cors(), prizeController.getPrize);

app.listen(port, () => {
  console.log(`Restaurant's app listening on port ${port}!`);
});
