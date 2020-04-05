import transactionRouter from './api/controllers/transaction/router';

export default function routes(app) {
  app.use('/api/money-account/transactions', transactionRouter);
}
