const bcrypt = require('bcrypt');
const { User } = require('../models');
/* const saltRounds = 10; */

const userController = {
  login: (req, res) => {
    res.render('login');
  },
  do_login: async (req, res, next) => {
    try {
      const { username, password } = req.body;
      if (!username || !password) {
        throw new Error('請輸入帳號密碼');
      }
      const user = await User.findOne({
        where: {
          username,
        },
      }).catch((err) => {
        console.log(`*${err.toString()}`);
        throw new Error('請再試一次');
      });
      if (!user) {
        throw new Error('無此帳號');
      }
      bcrypt.compare(password, user.password, (err, isSuccess) => {
        if (err || !isSuccess) {
          throw new Error('帳密錯誤');
        }
      });
      req.session.username = user.username;
      return res.redirect('/');
    } catch (err) {
      req.flash('errMessage', err.message);
      return next();
    }
  },
  do_logout: (req, res) => {
    req.session.userid = null;
    res.redirect('/');
  },
};
module.exports = userController;
