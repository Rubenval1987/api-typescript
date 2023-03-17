import 'dotenv/config'
import express from 'express'
import 'express-async-errors'
import cors from 'cors'
import { routes } from './routes'

const app = express()
app.use(...handlers: cors())
app.use(...handlers: express.json())
app.use(...handlers: routes)

app.listen(path: process.env.PORT, callback:() => {
  console.log(message: `Server started on port ${process.env.PORT}! 🏆`)
})
