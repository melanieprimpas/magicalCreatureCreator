// server/models/creature.ts
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
  habitats_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'habitats',
      key: 'id',
    },
  },
  abilities_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'abilities',
      key: 'id',
    },
  },
}, {
  sequelize,
  modelName: 'Creature',
  tableName: 'creatures',
  timestamps: false,
});

export default Creature;