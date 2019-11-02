import Sequelize from 'sequelize'

const config = {
  host: 'localhost',
  username: 'postgres',
  password: 'postgres',
  database: 'sequelize-playground',
  dialect: 'postgres',
  logging: false,
  timezone: '+07:00'
}
export default new Sequelize(config)