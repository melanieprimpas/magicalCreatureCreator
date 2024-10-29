// const sequelize = require('../config/connection');
import sequelize from '../config/connection.js';
import { User } from './user.js';
import Habitat from './habitat.js';
import Ability from './ability.js';
import Creature from './creature.js';
import UserCreature from './userCreature.js';

const models = {
  User
};

Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

// module.exports = {
//   sequelize,
//   ...models
// };


// Define associations
User.belongsToMany(Creature, { through: UserCreature, foreignKey: 'user_id' });
Creature.belongsToMany(User, { through: UserCreature, foreignKey: 'creature_id' });

Creature.belongsTo(Habitat, { foreignKey: 'habitats_name', targetKey: 'name'});
Habitat.hasMany(Creature, { foreignKey: 'habitats_name', sourceKey: 'name'});

Creature.belongsTo(Ability, { foreignKey: 'abilities_name', targetKey: 'name'});
Ability.hasMany(Creature, { foreignKey: 'abilities_name', sourceKey: 'name'});

export { User, Habitat, Ability, Creature, UserCreature };
