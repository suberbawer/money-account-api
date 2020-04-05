import utils from '../../../common/utils';
import TransactionService from '../../services/transaction.service';

class Controller {
  createTransaction = (req, res) => {
    const { amount, type } = req.body;

    if (amount < 0) {
      utils.respondError(res, { status: 400, message: "Transaction amount can't be negative" });
      return;
    }
    console.log("body", req.body);

    if (!["credit", "debit"].find(e => e === type)) {
      utils.respondError(res, { status: 400, message: "Transaction types are restricted to credit or debit" });
      return;
    }

    TransactionService.createTransaction({ amount, type });

    res.status(200).send({ message: 'Transaction create success' });
  };

  getAllTransactions = (req, res) => {
    const transactions = TransactionService.getAllTransactions();

    res.status(200).send({ transactions });
  };
}

export default new Controller();
