import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = process.env.PORT ?? 3070

app.post('/', (req, res) => {
  console.log('Received POST request')
  res.send('OK')
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
