import axios from 'axios'
import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(express.json())

app.post('/', async (req, res) => {
  console.log(`Received POST request:`, req.body)
  const { url, ...params } = req.body
  const response = await axios.post(url, params)
  res.send(response.data)
})

const port = process.env.PORT ?? 3070

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
