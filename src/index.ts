import cors from 'cors'
import express from 'express'
import dotenv from 'dotenv'

import { handleRawRequest } from './handler'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.post('/', async (req, res) => {
  console.log(`Received POST request:`, req.body)
  const responseData = await handleRawRequest(req.body)
  res.send(responseData)
})

const port = process.env.PORT ?? 3070

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
