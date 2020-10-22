const { Question } = require('../models');

const questionController = {
  index: async (req, res) => {
    try {
      const questions = await Question.findAll({ order: [['order', 'ASC']] });
      return res.render('faq', { questions });
    } catch (err) {
      console.log(`*${err.message}`);
      return res.render('error');
    }
  },
  admin: async (req, res) => {
    try {
      const questions = await Question.findAll({ order: [['order', 'ASC']] });
      return res.render('admin_faq', { questions });
    } catch (err) {
      console.log(`*${err.message}`);
      return res.render('error');
    }
  },
  add: async (req, res, next) => {
    try {
      const { order, question, answer } = req.body;
      if (!order || !question || !answer) {
        throw new Error('缺少必要欄位');
      }
      await Question.create({ order, question, answer }).catch((err) => {
        console.log(`*${err}`);
        throw new Error('請再試一次');
      });
      return res.redirect('/admin_faq');
    } catch (err) {
      req.flash('errMessage', err.message);
      return next();
    }
  },
  update: async (req, res, next) => {
    try {
      const {
        order, question, answer, id,
      } = req.body;
      if (!order || !question || !answer || !id) {
        console.log(`*${req.body}`);
        throw new Error('缺少必要欄位');
      }
      await Question.update({ order, question, answer }, { where: { id } }).catch((err) => {
        console.log(`*${err}`);
        throw new Error('請再試一次');
      });
      return res.redirect('/admin_faq');
    } catch (err) {
      req.flash('errMessage', err.message);
      return next();
    }
  },
  delete: async (req, res, next) => {
    try {
      const { id } = req.body;
      if (!id) {
        throw new Error('請再試一次');
      }
      await Question.destroy({ where: { id } }).catch((err) => {
        console.log(`*${err}`);
        throw new Error('請再試一次');
      });
      return res.redirect('/admin_faq');
    } catch (err) {
      req.flash('errMessage', err.message);
      return next();
    }
  },
};

module.exports = questionController;
