// access modifiers

class Invoice {
  // default behavior - all properties are public

  readonly client: string; // can read outside of the class, but can't change
  private details: string; // can't access outside of the class event for reading
  public amount: number; // default, access for reading and updating

  constructor(c: string, d: string, a: number){
    this.client = c;
    this.details = d;
    this.amount = a;
  }

  format(){
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }

}

const inv = new Invoice('mario', 'work', 200);
const inv2 = new Invoice('tom', 'work', 150);

let invoices: Invoice[] = [];
invoices.push(inv);
invoices.push(inv2);

invoices.forEach(inv => {
  console.log(inv.format());
})


//

const form = document.querySelector('.new-item-form') as HTMLFormElement;

//inputs

const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amounts = document.querySelector('#amount') as HTMLInputElement;


form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  console.log(
    type.value,
    toFrom.value,
    details.value,
    // convert string to number, example:  '200' ->>  200
    amounts.valueAsNumber
  );
  
});

