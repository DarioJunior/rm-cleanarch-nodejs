import { MissingParamError } from './errors/missing-param-error'
import { badRequest } from './helpers/http-helper'
import type { httpRequest, httpResponse } from './protocols/http'

export class SignUpController {
  handle (httpRequest: httpRequest): httpResponse {
    const requeridFields = ['name', 'email', 'password']

    for (const field of requeridFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError('email'))
      }
    }

    return {
      statusCode: 200,
      body: ''
    }
  }
}
