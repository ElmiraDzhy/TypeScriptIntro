// Interfaces

interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const user: IsPerson = {
  name: 'Kate',
  age: 12,
  speak: (text: string): void => {
    console.log(text);
    
  },
  spend: (sum: number): number => sum,
};

const greetPerson = (person: IsPerson) => {
  console.log(`Hello, ${person.name}`);
}

console.log(user);
greetPerson(user);



import Invoice from "./classes/Invoice.js"; 

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

