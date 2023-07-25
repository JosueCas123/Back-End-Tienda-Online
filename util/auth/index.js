import passport from 'passport';
import { localStrategy } from './strategies/local.stategy.js';



passport.use(localStrategy);
