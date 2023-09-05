import HasFormatter from "../intefaces/HasFormatter.js";

class Payment implements HasFormatter {
  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number
  ){
    this.recipient = recipient;
    this.details = details;
    this.amount = amount;
  }

  format(){
    return `${this.recipient} is owed $${this.amount} for ${this.details}`;
  }

}

export default Payment;