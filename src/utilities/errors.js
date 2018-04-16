import createError from 'custom-error-generator'

/** Use when an arguments is missing for an action/function */
export const MissingArgumentError = createError('Missing Input Error',
  null,
  function (message, status, validation) {
    this.status = 400 || status
    this.message = message
    this.validation = validation
  }
)

/** Use when the arguments for a function are not valid */
export const InvalidArgumentError = createError('Invalid Argument Error',
  null,
  function (message, status, validation) {
    this.status = 400 || status
    this.title = 'Invalid Argument Error'
    this.message = message
  }
)

/** Use when the user tries to access an area they are not permitted to enter */
export const ForbiddenError = createError('Forbidden Error',
  null,
  function (message, status, detail) {
    this.status = 403
    this.title = 'Forbidden Error'
    this.message = message
    this.detail = detail
  }
)

/** Use when the user tries to access an area they are not permitted to enter */
export const ApiError = createError('Forbidden Error',
  null,
  function (message, status, detail) {
    this.status = status
    this.title = 'API Error'
    this.message = message
    this.detail = detail
  }
)

