import Transactions from "../models/Transactions";
let transactions = [];

class TransactionService {
  static createTransaction = ({ amount, type }) => {
    const transaction = new Transactions({ amount, type });
    
    if (transactions && transactions.length) {
      transactions.push(transaction);
    } else {
      transactions = [transaction];
    }
  };

  static getAllTransactions = () => {
    return transactions;
  };

  static getTransactionById = id => {
    return transactions.find(t => t.id === +id);
  } 
}

export default TransactionService;