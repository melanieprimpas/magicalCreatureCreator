import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';

class Ability extends Model {}

Ability.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(40),
    allowNull: false,
    unique: true,
  },
  description: {
    type: DataTypes.TEXT,
  },
}, {
  sequelize,
  modelName: 'Ability',
  tableName: 'abilities',
  timestamps: false,
});

export default Ability;