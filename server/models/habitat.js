import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';

class Habitat extends Model {}

Habitat.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(20),
    allowNull: false,
    unique: true,
  },
  description: {
    type: DataTypes.TEXT,
  },
  habitat_url:  {
    type: DataTypes.TEXT,
    unique: true,
  }

}, {
  sequelize,
  modelName: 'Habitat',
  tableName: 'habitats',
  timestamps: false,
});

export default Habitat;