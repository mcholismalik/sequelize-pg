import db from '../utils/dbConfig'
import { Model, DataTypes } from 'sequelize'

export class Users extends Model { }
Users.init(
  {
    phone_number: {
      type: DataTypes.STRING(13),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    username: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  },
  {
    tableName: 'users',
    timestamps: true,
    paranoid: true,
    underscored: true,
    sequelize: db
  }
)
