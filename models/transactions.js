import db from '../utils/dbConfig'
import { Model, DataTypes } from 'sequelize'

export class Transactions extends Model { }
Transactions.init(
  {
    nominal: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    notes: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  },
  {
    tableName: 'transactions',
    timestamps: true,
    paranoid: true,
    underscored: true,
    sequelize: db
  }
)
