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

  let values: [string, string, number] = 
    [toFrom.value, details.value, amounts.valueAsNumber];

  let doc: HasFormatter;

  if (type.value === 'invoice') {
    doc = new Invoice(...values);
  }else{
    doc = new Payment(...values);
  }

  list.render(doc, type.value, 'end');
  
});

// tuples

let arr = ['ryu', 25, true];

//no errors:
arr[0] = false;
arr[1] = 'yoshi';
arr = [30, false, 'yoshi'];

// the difference with the tuples is the once we define position type - we can't change it

let tup: [string, number, boolean] = ['ryu', 23, false];

tup = ['str', 33, true]; // allow
// tup[0] = false ->> error

let student: [string, number];

student = ['chun-li', 153612584];
// student = [123123, 'name'] ->> error