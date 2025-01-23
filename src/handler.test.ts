import { describe, expect, test } from '@jest/globals'

import { parseRequestBody } from './handler'

describe('parseRequestBody', () => {
  test('correctly extracts expected fields', () => {
    expect(
      parseRequestBody({
        url: 'url',
        answer: 'answer',
        response: 'response',
        params: { param: 'param' },
      }),
    ).toStrictEqual({
      url: 'url',
      evaluationFunctionRequestData: {
        answer: 'answer',
        response: 'response',
        params: { param: 'param' },
      },
    })
  })

  test('rejects requests with missing fields', () => {
    expect(
      parseRequestBody({
        answer: 'answer',
        response: 'response',
        params: { param: 'param' },
      }),
    ).toBeNull()
    expect(
      parseRequestBody({
        url: 'url',
        response: 'response',
        params: { param: 'param' },
      }),
    ).toBeNull()
    expect(
      parseRequestBody({
        url: 'url',
        answer: 'answer',
        params: { param: 'param' },
      }),
    ).toBeNull()
    expect(
      parseRequestBody({
        url: 'url',
        answer: 'answer',
        response: 'response',
      }),
    ).toBeNull()
  })
})
