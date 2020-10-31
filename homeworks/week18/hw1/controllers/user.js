/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
const bcrypt = require('bcrypt');
const { User } = require('../models');

const userController = {
  index: async (req, res) => {
    try {
      if (!req.session.username) {
        return res.render('login');
      }
      res.redirect('/admin-lottery');
    } catch (err) {
      console.log(`*${err.message}`);
      return res.render('error');
    }
  },
  login: async (req, res, next) => {
    try {
      const { username, password } = req.body;
      if (!username || !password) {
        throw new Error('缺少必要欄位');
      }
      const user = await User.findOne({ where: { username } });
      const isSuccess = await bcrypt.compare(password, user.password);
      if (!isSuccess) {
        throw new Error('帳號密碼錯誤');
      }
      req.session.username = username;
      res.redirect('/admin-lottery');
    } catch (err) {
      req.flash('errMessage', err.message);
      return next();
    }
  },
  logout: (req, res) => {
    req.session.username = null;
    res.redirect('/');
  },
};

module.exports = userController;
