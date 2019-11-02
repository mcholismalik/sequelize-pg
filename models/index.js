import db from '../utils/dbConfig'
import { Modules } from './modules'
import { Transactions } from './transactions'
import { Users } from './users'

Users.hasMany(Transactions)
Transactions.belongsTo(Users)
Users.belongsToMany(Modules, { through: 'users_modules' })
Modules.belongsToMany(Users, { through: 'users_modules' })

// db.sync().then(() => console.log(`Database synced ...`))

export { db, Users, Transactions, Modules }
