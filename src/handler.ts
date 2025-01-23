import axios from 'axios'

import * as schema from './schema'

export async function handleRawRequest(body: object): Promise<object> {
  const { url, ...evaluationFunctionRequestData } =
    schema.TestServerRequestData.parse(body)
  const response = await axios.post(url, evaluationFunctionRequestData)
  return response.data
}
