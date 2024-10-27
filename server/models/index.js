const sequelize = require('../config/connection');
const User = require('./user');

const models = {
  User
};

Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

module.exports = {
  sequelize,
  ...models
};