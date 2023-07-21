import { ValidationError } from "sequelize"

export function logErrors (err, req, res, next) {
 console.log(err);
  next(err)
}

export function errorHndle (err, req, res, next) {
  res.status(500).json({
    message: err.message,
    stack: err.stack
  })
}
export function errorBoon (err, req, res, next) {
  //dentro de boon viene una propiedad isBoom
  if (err.isBoom) {
    const { output } = err
    res.status(output.statusCode).json(output.payload)
  }else{

    next(err)
  }


}
export function ormErrorHandler(err, req, res, next) {
  if (err instanceof ValidationError) {
    res.status(409).json({
      statusCode: 409,
      message: err.name,
      errors: err.errors
    });
    next(err);
  }
}
