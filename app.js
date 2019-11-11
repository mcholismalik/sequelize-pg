import express from 'express'
import { db } from './models'
import { seeds } from './seeds'

const app = express()
const port = 3000

db.authenticate().then(async () => {
  console.log(`Connected to database ...`)
  // await seeds()
})
app.get('/', (req, res) => res.send('Hello Worlsd!'))

app.listen(port, () => console.log(`App listening on port ${port}`))