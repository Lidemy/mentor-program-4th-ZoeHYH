const imgur = require('../util/imgur');
const { Product } = require('../models');

const productController = {
  home: async (req, res) => {
    try {
      const products = await Product.findAll({ limit: 4, order: [['updatedAt', 'DESC']] });
      return res.render('index', { products });
    } catch (err) {
      console.log(`*${err.message}`);
      return res.render('error');
    }
  },
  index: async (req, res) => {
    try {
      const products = await Product.findAll({ order: [['updatedAt', 'DESC']] });
      return res.render('menu', { products });
    } catch (err) {
      console.log(`*${err.message}`);
      return res.render('error');
    }
  },
  admin: async (req, res) => {
    try {
      const products = await Product.findAll({ order: [['updatedAt', 'DESC']] });
      return res.render('admin-menu', { products });
    } catch (err) {
      console.log(`*${err.message}`);
      return res.render('error');
    }
  },
  add: async (req, res, next) => {
    try {
      if (!req.file) {
        throw new Error('需上傳檔案');
      }
      const { name, price } = req.body;
      if (!name || !price) {
        throw new Error('缺少必要欄位');
      }
      const { link, deletehash } = await imgur.uploadImg(
        req.file.buffer.toString('base64'),
        name,
      );
      await Product.create({
        name,
        price,
        image: link,
        imageDeleteHash: deletehash,
      }).catch((err) => {
        console.log(`*${err}`);
        throw new Error('請再試一次');
      });
      return res.redirect('/admin-menu');
    } catch (err) {
      req.flash('errMessage', err.message);
      return next();
    }
  },
  updateImg: async (req, res, next) => {
    try {
      if (!req.file) {
        throw new Error('需上傳檔案');
      }
      const { id, name, imageDeleteHash } = req.body;
      if (!id || !name || !imageDeleteHash) {
        console.log(`*${req.body}`);
        throw new Error('缺少必要欄位');
      }
      const { link, deletehash } = await imgur.uploadImg(
        req.file.buffer.toString('base64'),
        name,
      );
      await Product.update(
        {
          image: link,
          imageDeleteHash: deletehash,
        },
        { where: { id } },
      ).catch((err) => {
        console.log(`*${err}`);
        throw new Error('請再試一次');
      });
      await imgur.deleteImg(imageDeleteHash);
      return res.redirect('/admin-menu');
    } catch (err) {
      req.flash('errMessage', err.message);
      return next();
    }
  },
  update: async (req, res, next) => {
    try {
      const { name, price, id } = req.body;
      if (!name || !price || !id) {
        console.log(`*${req.body}`);
        throw new Error('缺少必要欄位');
      }
      await Product.update({ name, price }, { where: { id } }).catch((err) => {
        console.log(`*${err}`);
        throw new Error('請再試一次');
      });
      return res.redirect('/admin-menu');
    } catch (err) {
      req.flash('errMessage', err.message);
      return next();
    }
  },
  delete: async (req, res, next) => {
    try {
      const { id, imageDeleteHash } = req.body;
      if (!id || !imageDeleteHash) {
        throw new Error('請再試一次');
      }
      await imgur.deleteImg(imageDeleteHash);
      await Product.destroy({ where: { id } }).catch((err) => {
        console.log(`*${err}`);
        throw new Error('請再試一次');
      });
      return res.redirect('/admin-menu');
    } catch (err) {
      req.flash('errMessage', err.message);
      return next();
    }
  },
};

module.exports = productController;
