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

export enum HandlerError {
  ParseFailed,
  ForwardingFailed,
}

export async function handleRawRequest(
  body: unknown,
): Promise<object | HandlerError> {
  const parseResult = parseRequestBody(body)
  if (parseResult == null) return HandlerError.ParseFailed

  const { url, evaluationFunctionRequestData } = parseResult
  try {
    const response = await axios.post(url, evaluationFunctionRequestData)
    return response.data
  } catch (_) {
    return HandlerError.ForwardingFailed
  }
}
