import axios from 'axios'
import cors from 'cors'
import express from 'express'
import dotenv from 'dotenv'

import * as schema from './schema'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.post('/', async (req, res) => {
  console.log(`Received POST request:`, req.body)
  const { url, ...evaluationFunctionRequestData } =
    schema.TestServerRequestData.parse(req.body)
  const response = await axios.post(url, evaluationFunctionRequestData)
  res.send(response.data)
})

const port = process.env.PORT ?? 3070

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
