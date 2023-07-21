import boom from '@hapi/boom'

export function validatorHandler(schema, property) {
  return  (req, res, next) => {
    const data = req[property];
    const {error} = schema.validate(data, {abortEarly: false})

    if(error){1
      next(boom.badRequest(error))
    }
    next()
  }
}
