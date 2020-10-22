const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('connect-flash');
const multer = require('multer');
const cors = require('cors');
const prizeController = require('./controllers/prize');
const productController = require('./controllers/product');
const questionController = require('./controllers/question');

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

app.get('/lottery', prizeController.index);
app.get('/admin_lottery', prizeController.admin);
app.post('/add_lottery', upload.single('image'), prizeController.add, redirectBack);
app.post('/update_image_lottery', upload.single('image'), prizeController.updateImg, redirectBack);
app.post('/update_lottery', prizeController.update, redirectBack);
app.post('/delete_lottery', prizeController.delete, redirectBack);
app.get('/getPrize', cors(), prizeController.getPrize);

app.get('/', productController.home);
app.get('/menu', productController.index);
app.get('/admin_menu', productController.admin);
app.post('/add_menu', upload.single('image'), productController.add, redirectBack);
app.post('/update_image_menu', upload.single('image'), productController.updateImg, redirectBack);
app.post('/update_menu', productController.update, redirectBack);
app.post('/delete_menu', productController.delete, redirectBack);

app.get('/faq', questionController.index);
app.get('/admin_faq', questionController.admin);
app.post('/add_faq', questionController.add, redirectBack);
app.post('/update_faq', questionController.update, redirectBack);
app.post('/delete_faq', questionController.delete, redirectBack);

app.listen(port, () => {
  console.log(`Restaurant's app listening on port ${port}!`);
});
