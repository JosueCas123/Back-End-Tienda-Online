import express from'express';
import passport from 'passport';
import jwt from 'jsonwebtoken'
import {config} from '../config/config.js'

export const routerAuth = express.Router();


routerAuth.post('/login',
// passport funciona como un middelwier, cada estategia tiene una clave, antes de todo tenemos que aser autenticacion la estategia sera local y no menejaremos sesiones
  passport.authenticate('local', {session:false}),
  async (req, res, next) => {
  try {
    const user = req.user;
    const payload = {
      sub: user.id,
      role:user.role
    }

    const token = jwt.sign(payload, config.jwtSecret)
    res.json({user, token});
  } catch (error) {
    next(error);
  }
});

