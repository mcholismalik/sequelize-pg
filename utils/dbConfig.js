import Sequelize from 'sequelize'

// Option 2: Passing a connection URI
// const sequelize = new Sequelize('postgres://user:pass@postgres:5433/db')
const sequelize = new Sequelize('postgres://user:pass@postgres:5432/db')
// const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/db')
// const config = {
  // host: process.env.DATABASE_URL,
//   username: 'postgres',
//   password: 'postgres',
//   database: 'sequelize-playground',
//   dialect: 'postgres',
//   logging: false,
//   timezone: '+07:00'
// }
export default sequelize