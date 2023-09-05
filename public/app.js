// Interfaces with Classes
import Invoice from "./classes/Invoice.js";
import Payment from "./classes/Payment.js";
let docOne;
let docTwo;
docOne = new Invoice('yoshi', 'web work', 250);
docTwo = new Payment('mario', 'plumbing work', 170);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
console.log(docs);
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
