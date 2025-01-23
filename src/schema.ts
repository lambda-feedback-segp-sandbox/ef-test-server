import { z } from 'zod'

export const EvaluationFunctionRequestData = z
  .object({
    answer: z.string(),
    response: z.string(),
    params: z.record(z.string(), z.any()),
  })
  .strict()
export type EvaluationFunctionRequestData = z.infer<
  typeof EvaluationFunctionRequestData
>

export const TestServerRequestData = EvaluationFunctionRequestData.extend({
  url: z.string(),
}).strict()
export type TestServerRequestData = z.infer<typeof TestServerRequestData>
