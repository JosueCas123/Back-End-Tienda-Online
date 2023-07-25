import boom from '@hapi/boom'
import { config } from '../config/config.js';


export function chekApiKey (req, res, next){
  // enviaremos una apiKey en los parametros de headers
  const apiKey = req.headers['api'];

  if(apiKey === config.apiKey){
    next();
  }else{
    next(boom.unauthorized())
  }
}
