import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(express.json())

app.post('/', (req, res) => {
  console.log(`Received POST request:`, req.body)
  res.send('OK')
})

const port = process.env.PORT ?? 3070

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
