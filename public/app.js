// Interfaces
const user = {
    name: 'Kate',
    age: 12,
    speak: (text) => {
        console.log(text);
    },
    spend: (sum) => sum,
};
const greetPerson = (person) => {
    console.log(`Hello, ${person.name}`);
};
console.log(user);
greetPerson(user);
import Invoice from "./classes/Invoice.js";
const inv = new Invoice('mario', 'work', 200);
const inv2 = new Invoice('tom', 'work', 150);
let invoices = [];
invoices.push(inv);
invoices.push(inv2);
invoices.forEach(inv => {
    console.log(inv.format());
});
//
const form = document.querySelector('.new-item-form');
//inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amounts = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, 
    // convert string to number, example:  '200' ->>  200
    amounts.valueAsNumber);
});
