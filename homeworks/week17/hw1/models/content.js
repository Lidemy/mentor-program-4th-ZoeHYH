'use strict';
const {
  Model
} = require('sequelize');
const category = require('./category');
module.exports = (sequelize, DataTypes) => {
  class Content extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Content.belongsTo(models.Category);
    }
  };
  Content.init({
    title: DataTypes.STRING,
    isDeleted: DataTypes.INTEGER,
    CategoryId: DataTypes.INTEGER,
    text: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Content',
  });
  return Content;
};