import { MissingParamError } from './errors/missing-param-error'
import { badRequest } from './helpers/http-helper'
import type { Controller } from './protocols/controller'
import type { HttpRequest, HttpResponse } from './protocols/http'

export class SignUpController implements Controller {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requeridFields = ['name', 'email', 'password', 'passwordConfirmation']

    for (const field of requeridFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }

    return {
      statusCode: 200,
      body: ''
    }
  }
}
