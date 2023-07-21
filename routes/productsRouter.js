import express from 'express';

import { ProductsServise } from '../service/product.service.js';
import { validatorHandler } from '../middleware/validator.handel.js';
import { createProductSchema, getProductSchema, queryProducShema, updateProductSchema} from '../schemas/product.schema.js';

export const routerProduct = express.Router()
const servicio = new ProductsServise();

routerProduct.get("/",
validatorHandler(queryProducShema, 'query'),
async(req, res, next) => {
try {
  const productos = await servicio.find(req.query);
  res.json(productos)

} catch (error) {
  next(error)
}

});


//todas las rutas especificas deben ir antes de las rutas dinamincas

routerProduct.get("/filter", (req, res) => {
  res.send('yo soy un filter')
})

routerProduct.get("/:id",
validatorHandler(getProductSchema, 'params'),
async (req, res, next) => {
  try {
    const {id} = req.params
    const product = await servicio.finOne(id)
    res.json(product)

  } catch (error) {
    next(error)
  }


})

routerProduct.post('/',
validatorHandler(createProductSchema, 'body'),
async(req, res) => {

  const body = req.body
  const newProducts = await servicio.create(body)

    res.status(201).json(newProducts)
})

routerProduct.patch('/:id',
 validatorHandler(getProductSchema, 'params'),
 validatorHandler(updateProductSchema, 'body'),
async(req, res, next) => {

  try {
    const {id} = req.params
      const body = req.body;
      const actializar = await servicio.update(id, body)
      res.json({
        message:'created',
        actializar
      })

  } catch (error) {
    next(error)
  }
})

routerProduct.delete('/:id', async(req, res) => {
  const {id} = req.params

    const rta = await servicio.delete(id)
    res.json({
      message:'elimanado coreectamete',
      rta
    })
})


