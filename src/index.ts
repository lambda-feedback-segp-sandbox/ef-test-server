import cors from 'cors'
import express from 'express'
import dotenv from 'dotenv'

import { handleRawRequest } from './handler'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.post('/', async (req, res) => {
  console.log(`[INFO] Received POST request:`, req.body)
  const responseData = await handleRawRequest(req.body)
  if (responseData == null) {
    console.log('[WARN] Invalid request received and ignored.')
    res.status(400).send()
  } else {
    console.log(
      '[INFO] Received response from evaluation function:',
      responseData,
    )
    res.send(responseData)
  }
})

const port = process.env.PORT ?? 3070

app.listen(port, () => {
  console.log(`[INFO] Listening on port ${port}`)
})
