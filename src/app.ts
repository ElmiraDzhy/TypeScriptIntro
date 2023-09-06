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

// Generics

// generics allows to create reusable blocks of code
// which could be use with different types

const addUID = (obj: object) => {
  let uid = Math.floor(Math.random() * 1000);
  return {...obj, uid};
}

let docOne = addUID({name: 'Lola', age: 25});

// console.log(docOne.name); if i try to access a property - we get an error
// this property 'name' does not exist on type {uid: number}
// why ? - when we passing the object into function 'addUID'
// we not spesify exactly what this obj should be

//we can combat this by using a generic:

const addUID_2 = <T extends object>(obj: T) => {
  let uid = Math.floor(Math.random() * 1000);
  return {...obj, uid};
}

let docTwo = addUID_2({name: 'lola', age: 30});

console.log(docTwo.name); // no error

//with interface
interface Resource <T> {
  uid: number;
  resourceName: string;
  data: T; // we want to make it flexible
}

const docThree: Resource<string> = {
  uid: 1,
  resourceName: 'person',
  data: 'str',
}

const docFour: Resource<object[]> = {
  uid: 1,
  resourceName: 'person',
  data:[{name: 'shaun'}],
}
