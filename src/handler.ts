import axios from 'axios'

import * as schema from './schema'

export function parseRequestBody(body: unknown): {
  url: string
  evaluationFunctionRequestData: schema.EvaluationFunctionRequestData
} | null {
  const parseResult = schema.TestServerRequestData.safeParse(body)
  if (!parseResult.success) return null

  const { url, ...evaluationFunctionRequestData } = parseResult.data
  return { url, evaluationFunctionRequestData }
}

export async function handleRawRequest(body: unknown): Promise<object | null> {
  const parseResult = parseRequestBody(body)
  if (parseResult == null) return null

  const { url, evaluationFunctionRequestData } = parseResult
  const response = await axios.post(url, evaluationFunctionRequestData)
  return response.data
}
