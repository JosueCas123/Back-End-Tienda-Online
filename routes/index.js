import express from 'express';

import {routerProduct} from './productsRouter.js'
import { routerUser } from './user.router.js';
import { routerCostumer } from './costomer.router.js';
import { routerCategory } from './category.router.js';
import { routerOrder } from './order.router.js';


export const routerApi = (app) => {

  const router  = express.Router()
  app.use('/api/v1', router)
  router.use('/products',routerProduct )
  router.use('/user', routerUser)
  router.use('/costomer', routerCostumer)
  router.use('/category', routerCategory)
  router.use('/Order', routerOrder)
}


