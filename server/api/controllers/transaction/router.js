import * as express from 'express';
import controller from './controller';

export default express
  .Router()
  .post('/create', controller.createTransaction)
  .get('/all', controller.getAllTransactions)
  .get('/:id', controller.getTransactionById);
