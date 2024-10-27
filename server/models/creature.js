
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/connection.js';

class Creature extends Model {}

Creature.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(40),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  image_url: {
    type: DataTypes.TEXT,
  },
  habitats_name: {
    type: DataTypes.STRING(40),
    references: {
      model: 'habitats',
      key: 'name',
    },
  },
  habitat_image: {
    type: DataTypes.TEXT,
    references: {
      model: 'habitats',
      key: 'habitat_url'
    },
  },
  abilities_name: {
    type: DataTypes.STRING(40),
    references: {
      model: 'abilities',
      key: 'name',
    },
  },
  strength: {
    type: DataTypes.INTEGER,
  },
  intelligence: {
    type: DataTypes.INTEGER,
  },
  agility: {
    type: DataTypes.INTEGER,
  },
}, {
  sequelize,
  modelName: 'Creature',
  tableName: 'creatures',
  timestamps: false,
});

export default Creature;