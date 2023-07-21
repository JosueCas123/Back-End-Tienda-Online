import express from 'express';
import { OrderService } from '../service/order.service.js';
import { validatorHandler } from '../middleware/validator.handel.js';
import { addItemsShena, createOrderSchema, getOrderSchema } from '../schemas/order.shema.js';


export const routerOrder = express.Router();
const service = new OrderService();

routerOrder.get(
  '/:id',
  validatorHandler(getOrderSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const order = await service.findOne(id);
      res.json(order);
    } catch (error) {
      next(error);
    }
  }
);

routerOrder.post(
  '/',
  validatorHandler(createOrderSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newOrder = await service.create(body);
      res.status(201).json(newOrder);
    } catch (error) {
      next(error);
    }
  }
);
routerOrder.post(
  '/add-items',
  validatorHandler(addItemsShena, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newItems = await service.addItem(body);
      res.status(201).json(newItems);
    } catch (error) {
      next(error);
    }
  }
);

