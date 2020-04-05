class Transactions {
  constructor({ type, amount }) {
    this.id = Math.floor(Math.random() * 1000); // number between 0 and 999
    this.type = type;
    this.amount = amount;
    this.effectiveDate = new Date();
  }
}

export default Transactions;