import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';

class UserCreature extends Model {}

UserCreature.init({
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'users',
      key: 'id',
    },
    primaryKey: true,
  },
  creature_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'creatures',
      key: 'id',
    },
    primaryKey: true,
  },
}, {
  sequelize,
  modelName: 'UserCreature',
  tableName: 'user_creatures',
  timestamps: false,
});

export default UserCreature;