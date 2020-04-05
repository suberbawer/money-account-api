import utils from '../../../common/utils';
import TransactionService from '../../services/transaction.service';

let total = 0;

class Controller {
  createTransaction = (req, res) => {
    const { amount, type } = req.body;

    if (type === "debit" && (total - amount < 0)) {
      utils.respondError(res, { status: 400, message: "Transaction amount can't be negative" });
      return;
    }

    if (!["credit", "debit"].find(e => e === type)) {
      utils.respondError(res, { status: 400, message: "Transaction types are restricted to credit or debit" });
      return;
    }

    TransactionService.createTransaction({ amount, type });
    // When debit rest, otherwise sum to the total
    if (type === "debit") {
      total -= amount;
    } else {
      total += amount;
    }

    res.status(200).send({ message: 'Transaction create success' });
  };

  getAllTransactions = (req, res) => {
    const transactions = TransactionService.getAllTransactions();

    res.status(200).send({ transactions, total });
  };

  getTransactionById = (req, res) => {
    const { id } = req.params;

    if (!id) {
      utils.respondError(res, { status: 400, message: "Transaction id is mandatory" });
      return;
    }

    const transaction = TransactionService.getTransactionById(id);
    res.status(200).send(transaction);
  }
}

export default new Controller();
