// Interfaces with Classes

import Invoice from "./classes/Invoice.js"; 
import Payment from "./classes/Payment.js";
import HasFormatter from "./intefaces/HasFormatter.js";

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice('yoshi', 'web work', 250);
docTwo = new Payment('mario', 'plumbing work', 170);

let docs: HasFormatter[] = [];

docs.push(docOne);
docs.push(docTwo);

console.log(docs);


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

