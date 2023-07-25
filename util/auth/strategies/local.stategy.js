import {Strategy} from 'passport-local';
import boom from '@hapi/boom';
import bcrypt from 'bcrypt';
import { UserServise } from '../../../service/user.service.js';
// MANDAMOS A LLAMAR AL USERSERVI
const service = new UserServise();

// NOS TRAEMOS UNA INSTANCIA DE STATEGY
export const localStrategy = new Strategy({
  usernameField:'email',
  passwordField:'password'
},
  async(email, password, done) =>{
  try {
    const user = await service.findByEmail(email);

    //validacion por si no hay el usr en la base de datos
    if (!user) {
      //enviamos siempre el error y false
      done(boom.unauthorized("Sorry, this email does not exist."), false)
    }

    // se hay el usuario
    const isMatch = await bcrypt.compare(password, user.password);
    //console.log(isMatch)

    if(!isMatch){
      done(boom.unauthorized("Sorry, this PASSWOR NO EXIXTE"), false)
    }

    // si todo sale bien mandamos el usuario
    delete user.dataValues.password
    done(null, user)

  } catch (error) {
    // Siempre se envia el done como error
    done(error, false);
  }
});

