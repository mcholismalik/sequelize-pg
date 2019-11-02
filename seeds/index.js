import { db, Users, Modules } from '../models'

export const seeds = async () => {
  try {
    await db.sync({ force: true })
    console.log(`Database sync forced ...`)

    const u = await Users.create({ phone_number: '087819279', name: 'M Cholis', username: 'cols123' })
    console.log(`User ${u.name} created ...`)
    const m = await Modules.create({ code: 'mod1', name: 'Dashboard' })
    console.log(`Module ${m.name} created ...`)

    const fU = await Users.findByPk(1)
    const mU = await fU.addModule(1)
    console.log(`Module added to user ...`)
  } catch (err) {
    console.log(`Seeds error ...`)
    console.log(err)
  }
}

