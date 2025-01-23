import cors from 'cors'
import express from 'express'
import dotenv from 'dotenv'

import { HandlerError, handleRawRequest } from './handler'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.post('/', async (req, res) => {
  console.log(`[INFO] Received POST request:`, req.body)
  const responseData = await handleRawRequest(req.body)
  switch (responseData) {
    case HandlerError.ParseFailed:
      console.log('[WARN] Invalid request received and ignored.')
      res.status(400).send()
      break
    case HandlerError.ForwardingFailed:
      console.log('[WARN] Failed to forward request to evaluation function.')
      res.status(400).send()
      break
    default:
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
