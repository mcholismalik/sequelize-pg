import db from '../utils/dbConfig'
import { Model, DataTypes } from 'sequelize'

export class Modules extends Model { }
Modules.init(
  {
    code: {
      type: DataTypes.STRING(13),
      allowNull: false,
      unique: true
    },
    name: {
      type: DataTypes.STRING(25),
      allowNull: false
    }
  },
  {
    tableName: 'modules',
    timestamps: true,
    paranoid: true,
    underscored: true,
    sequelize: db
  }
)
