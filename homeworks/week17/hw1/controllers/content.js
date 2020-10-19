/* eslint-disable consistent-return */
/* eslint-disable object-curly-newline */
const { Content, Category } = require('../models');

const contentController = {
  index: async (req, res) => {
    const contents = await Content.findAll({
      where: {
        isDeleted: 0,
      },
      order: [['updatedAt', 'DESC']],
      limit: 5,
      include: Category,
    }).catch((err) => {
      console.log(`*${err.message}`);
      req.flash('errMessage', '請重新整理');
      return res.redirect('/');
    });
    res.render('index', { contents });
  },
  list: async (req, res) => {
    const contents = await Content.findAll({
      where: {
        isDeleted: 0,
      },
      order: [['updatedAt', 'DESC']],
      include: Category,
    }).catch((err) => {
      console.log(`*${err.message}`);
      req.flash('errMessage', '請重新整理');
      return res.redirect('/');
    });
    res.render('list', { contents });
  },
  article: async (req, res) => {
    const content = await Content.findOne({
      where: {
        isDeleted: 0,
        id: req.params.id,
      },
      include: Category,
    }).catch((err) => {
      console.log(`*${err.message}`);
      req.flash('errMessage', '請重新整理');
      return res.redirect('/');
    });
    res.render('article', { content });
  },
  admin: async (req, res) => {
    try {
      if (!req.session.username) {
        throw new Error('請登入');
      }
      const contents = await Content.findAll({
        where: {
          isDeleted: 0,
        },
        order: [['updatedAt', 'DESC']],
        include: Category,
      }).catch((err) => {
        console.log(`*${err.message}`);
        throw new Error('請重新整理');
      });
      res.render('admin', { contents });
    } catch (err) {
      req.flash('errMessage', err.message);
      return res.redirect('/');
    }
  },
  post: async (req, res) => {
    try {
      if (!req.session.username) {
        throw new Error('請登入');
      }
      const categories = await Category.findAll().catch((err) => {
        console.log(`*${err.message}`);
        throw new Error('請重新整理');
      });
      res.render('post', { categories });
    } catch (err) {
      req.flash('errMessage', err.message);
      return res.redirect('/');
    }
  },
  edit: async (req, res) => {
    try {
      if (!req.session.username) {
        throw new Error('請登入');
      }
      const content = await Content.findOne({
        where: {
          isDeleted: 0,
          id: req.body.id,
        },
        include: Category,
      }).catch((err) => {
        console.log(`*${err.message}`);
        throw new Error('請重新整理');
      });
      const categories = await Category.findAll().catch((err) => {
        console.log(`*${err.message}`);
        throw new Error('請重新整理');
      });
      res.render('edit', { content, categories });
    } catch (err) {
      req.flash('errMessage', err.message);
      return res.redirect('/');
    }
  },
  do_post: async (req, res, next) => {
    try {
      if (!req.session.username) {
        throw new Error('未登入');
      }
      const { title, CategoryId, text } = req.body;
      if (!title || !CategoryId || !text) {
        throw new Error('缺少必要欄位');
      }
      await Content.create({
        title,
        CategoryId,
        text,
      }).catch((err) => {
        console.log(`*${err.message}`);
        throw new Error('請再試一次');
      });
      res.redirect('/admin');
    } catch (err) {
      if (err.message === '未登入') {
        return res.redirect('/login');
      }
      req.flash('errMessage', err.message);
      return next();
    }
  },
  do_edit: async (req, res, next) => {
    try {
      if (!req.session.username) {
        throw new Error('請登入');
      }
      const { title, CategoryId, text, id } = req.body;
      if (!title || !CategoryId || !text) {
        throw new Error('缺少必要欄位');
      }
      await Content.update(
        {
          title,
          CategoryId,
          text,
        },
        {
          where: {
            id,
          },
        },
      ).catch((err) => {
        console.log(`*${err.message}`);
        throw new Error('請再試一次');
      });
      res.redirect('/admin');
    } catch (err) {
      req.flash('errMessage', err.message);
      return next();
    }
  },
  do_delete: async (req, res, next) => {
    try {
      if (!req.session.username) {
        throw new Error('請登入');
      }
      await Content.update(
        {
          isDeleted: 1,
        },
        {
          where: {
            id: req.body.id,
          },
        },
      ).catch((err) => {
        console.log(`*${err.message}`);
        throw new Error('請再試一次');
      });
      res.redirect('/admin');
    } catch (err) {
      req.flash('errMessage', err.message);
      return next();
    }
  },
};

module.exports = contentController;
