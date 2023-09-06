// Rendering an HTML Template

import Invoice from "./classes/Invoice.js"; 
import Payment from "./classes/Payment.js";
import HasFormatter from "./intefaces/HasFormatter.js";
import ListTemplate from './classes/ListTemplate.js';


const form = document.querySelector('.new-item-form') as HTMLFormElement;

//inputs

const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amounts = document.querySelector('#amount') as HTMLInputElement;

//list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;

  if (type.value === 'invoice') {
    doc = new Invoice(toFrom.value, details.value, amounts.valueAsNumber);
  }else{
    doc = new Payment(toFrom.value, details.value, amounts.valueAsNumber);
  }

  list.render(doc, type.value, 'end');
  
});

