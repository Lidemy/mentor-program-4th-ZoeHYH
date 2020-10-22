/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */
const imgur = require('../util/imgur');
const { Prize } = require('../models');

const prizeController = {
  index: async (req, res) => {
    try {
      return res.render('lottery');
    } catch (err) {
      console.log(`*${err.message}`);
      return res.render('error');
    }
  },
  admin: async (req, res) => {
    try {
      const prizes = await Prize.findAll({ order: [['probability', 'ASC']] });
      let remaining = 100;
      prizes.forEach((prize) => {
        remaining -= prize.probability;
      });
      return res.render('admin_lottery', { prizes, remaining });
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
      const { name, probability, description } = req.body;
      if (!name || !probability || !description) {
        throw new Error('缺少必要欄位');
      }
      const { link, deletehash } = await imgur.uploadImg(
        req.file.buffer.toString('base64'),
        name,
      );
      await Prize.create({
        name,
        probability,
        image: link,
        imageDeletehash: deletehash,
        description,
      }).catch((err) => {
        console.log(`*${err}`);
        throw new Error('請再試一次');
      });
      return res.redirect('/admin_lottery');
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
      const { id, name, imageDeletehash } = req.body;
      if (!id || !name || !imageDeletehash) {
        console.log(`*${req.body}`);
        throw new Error('缺少必要欄位');
      }
      const { link, deletehash } = await imgur.uploadImg(
        req.file.buffer.toString('base64'),
        name,
      );
      await Prize.update(
        {
          image: link,
          imageDeletehash: deletehash,
        },
        { where: { id } },
      ).catch((err) => {
        console.log(`*${err}`);
        throw new Error('請再試一次');
      });
      await imgur.deleteImg(imageDeletehash);
      return res.redirect('/admin_lottery');
    } catch (err) {
      req.flash('errMessage', err.message);
      return next();
    }
  },
  update: async (req, res, next) => {
    try {
      const {
        name, probability, description, id,
      } = req.body;
      if (!name || !probability || !description || !id) {
        console.log(`*${req.body}`);
        throw new Error('缺少必要欄位');
      }
      await Prize.update(
        { name, probability, description },
        { where: { id } },
      ).catch((err) => {
        console.log(`*${err}`);
        throw new Error('請再試一次');
      });
      return res.redirect('/admin_lottery');
    } catch (err) {
      req.flash('errMessage', err.message);
      return next();
    }
  },
  delete: async (req, res, next) => {
    try {
      const { id, imageDeletehash } = req.body;
      if (!id || !imageDeletehash) {
        throw new Error('請再試一次');
      }
      await imgur.deleteImg(imageDeletehash);
      await Prize.destroy({ where: { id } }).catch((err) => {
        console.log(`*${err}`);
        throw new Error('請再試一次');
      });
      return res.redirect('/admin_lottery');
    } catch (err) {
      req.flash('errMessage', err.message);
      return next();
    }
  },
  getPrize: async (req, res) => {
    try {
      const prizes = await Prize.findAll({ order: [['probability', 'ASC']] });
      const random = [];
      for (let i = 0; i < prizes.length; i++) {
        for (let j = 0; j < prizes[i].probability; j++) {
          random.push(i);
        }
      }
      const randomNumber = Math.floor(Math.random() * 100);
      const result = prizes[random[randomNumber]] || { name: 'none' };
      return res.json({
        name: result.name,
        image: result.image,
        description: result.description,
      });
    } catch (err) {
      req.flash('errMessage', err.message);
      res.json({ error: 'Failed' });
    }
  },
};

module.exports = prizeController;
